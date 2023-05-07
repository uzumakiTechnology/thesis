// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token1 is ERC20 {

    constructor() ERC20("META","MT"){
        _mint(msg.sender, 100000 * 10 ** decimals());
    }
    
}