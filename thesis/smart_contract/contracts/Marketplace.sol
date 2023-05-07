// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

//When a user puts an NFT for sale, the ownership of the item will be transferred from the creator to the marketplace contract. (third party)

//When a user purchases an NFT, the purchase price will be transferred from the buyer to the seller and the item 
//will be transferred from the marketplace to the buyer.

//The marketplace owner will be able to set a listing fee. This fee will be taken from the seller and transferred 
//to the contract owner upon completion of any sale, enabling the owner of the marketplace to earn recurring 
//revenue from any sale transacted in the marketplace.


contract Marketplace is ERC721URIStorage {
    // count number nfts
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemSold;

    uint256 listingPrice = 0.0015 ether;

    address payable owner;

    mapping(uint256 => MarketItem) private idMarketItem; // pass NFT id in a single struct

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool isSold;
    }

    event MarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool isSold
    );

    modifier OnlyOwner() {
        require(
            msg.sender == owner,
            "Only owner of the marketplace can change listing price"
        );
        _;
    }

    constructor() ERC721("NFT Marketplace", "MNFT") {
        owner == payable(msg.sender);
    }

    // every one who mint NFTs in our marketplace have to pay a certain amount of fee

    // define a default price for all NFTs
    // if the price is charge higher => update
    // the function should only called by the owner of smart contract (apply modifier)

    function updateListingPrice(
        uint256 _listingPrice
    ) public payable OnlyOwner {
        listingPrice = _listingPrice;
    }

    // get listing price for user
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    // create NFT function
    /* Mints a token and lists it in the marketplace */

    function createToken(
        string memory tokenURI,
        uint256 price
    ) public payable returns (uint256) {
        // taking url, price of NFTs
        _tokenIds.increment(); // tokenId will increase whenvever someone create NFT
        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        createMarketItem(newTokenId, price);
        return newTokenId;
    }

    // create market items
    function createMarketItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "Price must above zero");
        require(
            msg.value == listingPrice,
            "Listing price should be 0.0015 eth"
        );

        // calling and updating data to struct
        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender), // seller
            payable(address(this)), // owner
            price,
            false // selling status
        );
        _transfer(msg.sender, address(this), tokenId); // from - to - tokenId

        emit MarketItemCreated(
            tokenId,
            msg.sender,
            address(this),
            price,
            false
        );
    }

    // Resale token Function
    // allow user to sell nft or re-sell it with higher/lower price
    function reSellToken(uint256 tokenId, uint256 price) public payable {
        require(
            idMarketItem[tokenId].owner == msg.sender,
            "You must the owner of token"
        );
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );

        idMarketItem[tokenId].isSold = false;
        idMarketItem[tokenId].price = price;
        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner = payable(address(this));

        _itemSold.decrement();

        _transfer(msg.sender, address(this), tokenId);
    }

    // function to create market sale
    /**
     * @dev (buyer) buy a MarketItem from the marketplace.
     * Transfers ownership of the item, as well as funds
     * NFT:         seller    -> buyer
     * value:       buyer     -> seller
     * listingFee:  contract  -> marketowner
     */
    /* Transfers ownership of the item, as well as funds between parties */

    function CreateMarketSale(uint256 tokenId) public payable {
        uint256 price = idMarketItem[tokenId].price;

        require(
            msg.value == price,
            "Please submit asking price in order to complete purchase"
        ); // if someone wanna buy the NFT => provide the exact value to complete transaction

        // transfer
        idMarketItem[tokenId].owner = payable(msg.sender); // make the payment then change the state
        idMarketItem[tokenId].isSold = true;
        idMarketItem[tokenId].owner = payable(address(this));

        _itemSold.increment();
        _transfer(address(this), msg.sender, tokenId); // transfer the token owner
        // you will be owner of the marketplace smartcontract
        // whenever someone buy the nft, you will hold the money
        payable(owner).transfer(listingPrice); // whenever any sale happen
        payable(idMarketItem[tokenId].seller).transfer(msg.value); // transfer back the exact listing value for the one who sell token
    }

    // getting unsold NFTs
    // returning an array
    function fetchMarketItem() public view returns (MarketItem[] memory) {
        uint256 itemCount = _tokenIds.current();
        uint256 unSoldItemCount = _tokenIds.current() - _itemSold.current();
        uint256 currentIndex = 0;

        // Remaining item
        MarketItem[] memory items = new MarketItem[](unSoldItemCount); // fetch only nft are have not been sold (storage)

        // display in UI
        for (uint256 i = 0; i < itemCount; i++) {
            if (idMarketItem[i + 1].owner == address(this)) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    // function for get purchased item
    function fetchMyNFT() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalCount; i++) {
            // checking who is the owner
            if (idMarketItem[i + 1].owner == msg.sender) {
                // if is the owner
                itemCount += 1;
            }
        }
        // if NFT belong to this particular user => Store
        MarketItem[] memory items = new MarketItem[](itemCount);
        // Keep the data update
        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    // get single user items
    // display the information about the nft individuals
    function fetchListedItem() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);

        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
}
