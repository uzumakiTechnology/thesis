// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.9;

// define some interfaces of our ERC20 tokens

interface IWETH {

    // Able to deposit the token into the contract
    // When someone call the function swap token, we are depositing the token to the contract and then the contract is sending the token back to the user

    function deposit() external payable ;
    function witdthdraw(uint) external ;
    function totalSupply() external view returns (uint);

    //Returns the account balance of another account with address _owner.
    function balanceOf(address _owner) external view returns (uint256 balance);
   
    //Transfers _value amount of tokens to address _to, and MUST fire the Transfer event. 
    //The function SHOULD throw if the message caller’s account balance does not have enough tokens to spend.
    function transfer(address _to, uint256 _value) external returns (bool success);

    //Allows _spender to withdraw from your account multiple times, up to the _value amount. 
    //If this function is called again it overwrites the current allowance with _value.
    // approve uniswap send the contract on behalf's (represent) for us
    function approve(address _spender, uint256 _value) external returns (bool success);

    //Returns the amount which _spender is still allowed to withdraw from _owner.
    function allowance(address _owner, address _spender) external view returns (uint256 remaining);

    //Transfers _value amount of tokens from address _from to address _to, and MUST fire the Transfer event.
    //allowing contracts to transfer tokens on your behalf. This can be used for example to allow a contract to transfer tokens on your behalf and/or to charge fees in sub-currencies
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool success);


    /* ----------------------- EVENTS ---------------------------- */
    // MUST TRIGGER WHEN TOKENS ARE TRANSFERRED, INCLUDING 0 VALUE TRANSFERS
    event Transfer(address indexed _from, address indexed _to, uint256 _value);


    //MUST trigger on any successful call to approve(address _spender, uint256 _value).
    event Approval(address indexed _owner, address indexed _spender, uint256 _value); 

}