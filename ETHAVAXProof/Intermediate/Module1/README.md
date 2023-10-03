# SimpleWallet Smart Contract

This is a simple Ethereum smart contract written in Solidity for a basic wallet functionality. The contract allows users to deposit and withdraw funds, as well as check the current balance.

## Smart Contract Details

### SPDX-License-Identifier

This contract is released under the MIT License.

### Solidity Version

This smart contract is written in Solidity version 0.8.0. Make sure you have the appropriate compiler version installed to compile and deploy it.

### Contract Functions

1. **deposit(uint256 _value)**: Allows users to deposit funds into the wallet. The deposited amount will be added to the wallet's balance.

2. **withdraw(uint256 _amount)**: Allows users to withdraw funds from the wallet. It checks if the withdrawal amount does not exceed the wallet's balance and performs safety checks to prevent overflow and revert the transaction if conditions are not met.

3. **getBalance()**: Returns the current balance of the wallet.

## Usage

You can deploy this smart contract on an Ethereum blockchain using tools like Remix, Truffle, or Hardhat. Once deployed, interact with the contract using the following functions:

- Call the `deposit` function to add funds to the wallet.
- Call the `withdraw` function to withdraw funds, ensuring the withdrawal amount is within the available balance.
- Use the `getBalance` function to check the current balance of the wallet.
