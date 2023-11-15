# DegenToken Smart Contract

## Overview

The DegenToken smart contract is an Ethereum-based ERC-20 token with additional functionalities for managing a simple decentralized marketplace of products. It is implemented in Solidity, utilizing the OpenZeppelin library for ERC-20 and access control.

## Features

1. **Token Information:** The contract is named "Degen" with the symbol "DGN."

2. **Product Management:** The contract includes a product management system where each product has a specified cost and initial stock.

3. **Token Generation and Destruction:**
   - The owner can generate new tokens and distribute them to a specified address.
   - Token holders can burn (destroy) their own tokens.

4. **Custom Token Transfer:**
   - Users can perform custom token transfers using the `customTransfer` function.

5. **Product Purchase:**
   - Users can purchase products by spending tokens. The purchase deducts the cost from the buyer's token balance and reduces the product stock.

6. **Product Addition:**
   - The owner can add new products to the marketplace, specifying the name, cost, and initial stock.

## Smart Contract Deployment

To deploy the DegenToken smart contract, follow these steps:

1. Deploy the contract on an Ethereum-compatible blockchain.
2. Interact with the contract using a tool like Remix, Hardhat, or Truffle.

## Functions

1. **generateTokens(address to, uint256 amount):**
   - Generates and assigns tokens to the specified address. Only the owner can invoke this function.

2. **destroyTokens(uint256 amount):**
   - Burns (destroys) the specified amount of tokens from the caller's balance.

3. **customTransfer(address to, uint256 amount):**
   - Performs a custom token transfer from the caller to the specified address.

4. **purchaseProduct(string memory productName, uint256 quantity):**
   - Allows users to purchase a specified quantity of a product using their tokens.

5. **addProduct(string memory productName, uint256 cost, uint256 initialStock):**
   - Allows the owner to add a new product to the marketplace.