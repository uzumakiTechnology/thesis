// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token2 is ERC20 {

    constructor() ERC20("SHIBA","SHIB"){
        _mint(msg.sender, 100000 * 10 ** decimals());
    }
    
}