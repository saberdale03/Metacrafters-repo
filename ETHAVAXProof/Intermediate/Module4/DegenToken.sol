/*
    1. Minting new tokens: The platform should be able to create new tokens and distribute them to players as rewards. Only the owner can mint tokens.
    2. Transferring tokens: Players should be able to transfer their tokens to others.
    3. Redeeming tokens: Players should be able to redeem their tokens for items in the in-game store.
    4. Checking token balance: Players should be able to check their token balance at any time.
    5. Burning tokens: Anyone should be able to burn tokens, that they own, that are no longer needed.
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts@4.9.0/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.9.0/access/Ownable.sol";

contract DegenToken is ERC20, Ownable {
    struct Product {
        uint256 cost;
        uint256 stock;
    }

    mapping(string => Product) public products;

    constructor() ERC20("Degen", "DGN") {
        // Initialize products with their costs and initial stock
        products["banana"] = Product(15, 100);
        products["orange"] = Product(25, 75);
        products["carrot"] = Product(30, 50);
        products["potato"] = Product(75, 50);
    }

    function generateTokens(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function destroyTokens(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    function customTransfer(address to, uint256 amount) public returns (bool) {
        _transfer(_msgSender(), to, amount);
        return true;
    }

    function purchaseProduct(string memory productName, uint256 quantity) public {
        require(products[productName].stock >= quantity, "Not enough stock available");
        uint256 totalCost = products[productName].cost * quantity;
        require(balanceOf(msg.sender) >= totalCost, "Not enough tokens to buy the product");

        products[productName].stock -= quantity;

        _burn(msg.sender, totalCost);
    }

    function addProduct(string memory productName, uint256 cost, uint256 initialStock) public onlyOwner {
        require(bytes(productName).length > 0, "Product name cannot be empty");
        require(cost > 0, "Cost must be greater than 0");
        require(initialStock > 0, "Initial stock must be greater than 0");

        products[productName] = Product(cost, initialStock);
    }
}