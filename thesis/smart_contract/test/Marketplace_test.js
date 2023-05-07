const {ethers} = require('hardhat')

describe("Marketplace",() =>{
    it("Should create and execute market sale", async()=>{
        // deploy marketplace
        const Marketplace = await ethers.getContractFactory("Marketplace");
        const marketplace = await Marketplace.deploy();
        await marketplace.deployed();

        // get current listing price
        let listingPrice = await marketplace.getListingPrice();
        listingPrice = listingPrice.toString();

        const auctionPrice = ethers.utils.parseUnits('1', 'ether');

        // create two tokens
        await marketplace.createToken('https://www.mytokenlocation.com', auctionPrice,{value: listingPrice});
        await marketplace.createToken("https://www.mytokenlocation2.com", auctionPrice,{value:listingPrice});

        const [_, buyerAddress] = await ethers.getSigners()

        // execute sale of token to another user
        await marketplace.connect(buyerAddress).CreateMarketSale(1, {value: auctionPrice});
        
        // resell a token
        await marketplace.connect(buyerAddress).reSellToken(1, auctionPrice,{value: listingPrice}) ;

        // Query and return the unsold items
        items = await marketplace.fetchMarketItem()
        items = await Promise.all(items.map(async i =>{
            const tokenURI = await marketplace.tokenURI(i.tokenId)
            let item = {
                price: i.price.toString(),
                tokenId: i.tokenId.toString(),
                seller: i.seller,
                owner: i.owner,
                tokenURI
            }
            return item
        }))
        console.log('item: ', item);
    })
})