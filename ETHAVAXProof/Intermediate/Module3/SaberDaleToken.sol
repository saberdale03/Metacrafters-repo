// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SaberDaleToken is ERC20, Ownable {
    constructor(address initialOwner)
        ERC20("SaberDaleToken", "SDT")
        Ownable(initialOwner)
    {
        _mint(msg.sender, 100 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        require(amount > 0, "Amount must be greater than zero");
        return super.transfer(recipient, amount);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}