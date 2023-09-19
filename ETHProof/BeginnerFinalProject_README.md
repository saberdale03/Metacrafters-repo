# BeginnerFinalProject.sol

## Description
This is a simple Solidity smart contract named `MyToken` that allows you to create and manage your own cryptocurrency token on the Ethereum blockchain. This token contract includes basic functionalities such as minting and burning tokens, as well as storing essential token information.

## Requirements
Before you proceed, ensure you have the following requirements:

1. Solidity Compiler (0.8.18 or compatible)
2. Ethereum Development Environment (e.g., Remix, Truffle, or Hardhat)

## Features
This contract includes the following features:

1. Public variables to store token details:
   - `tokenName`: The name of the token (e.g., "DALESAB1").
   - `tokenAbbv`: The abbreviation or symbol of the token (e.g., "DS1").
   - `totalSupply`: The total supply of tokens initially set to 0.

2. Mapping to track token balances:
   - `balances`: A mapping that associates Ethereum addresses with their respective token balances.

3. Minting function:
   - `mint(address _add, uint _val)`: This function increases the total token supply by a specified value (`_val`) and adds that value to the balance of the specified address (`_add`).

4. Burning function:
   - `burn(address _add, uint _val)`: This function decreases the total token supply by a specified value (`_val`) and deducts that value from the balance of the specified address (`_add`) if the address has a sufficient balance.

## Getting Started
Follow these steps to get started with the `MyToken` contract:

1. Set up your Ethereum development environment.

2. Compile the contract using the Solidity compiler (version 0.8.18 or compatible).

3. Deploy the contract to the Ethereum blockchain using your preferred development environment.

4. Interact with the contract by calling the `mint` and `burn` functions to create and manage your tokens.

## Usage
You can interact with the `MyToken` contract on the Ethereum blockchain by using the following functions:

- `mint(address _add, uint _val)`: Mint new tokens and assign them to a specific Ethereum address.

- `burn(address _add, uint _val)`: Burn tokens from a specific Ethereum address, reducing the total supply.

Remember to check the balance of an address before performing a burn operation to ensure that the address has sufficient tokens to burn.

**Note:** This is a basic example of a token contract for educational purposes. In a real-world scenario, additional features, security measures, and considerations should be implemented.
