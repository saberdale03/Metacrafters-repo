# SaberDaleToken (SDT) ERC-20 Smart Contract

SaberDaleToken is an ERC-20 token smart contract written in Solidity. This contract is designed to allow the owner to mint new tokens, enable users to transfer tokens, and give users the ability to burn their own tokens.

## Features

1. **Minting:** Only the contract owner can mint new tokens using the `mint` function.

2. **Transferring:** Any user can transfer tokens to other addresses using the standard ERC-20 `transfer` function.

3. **Burning:** Any user can burn their own tokens using the `burn` function.

## Contract Details

- **Name:** SaberDaleToken (SDT)
- **Symbol:** SDT
- **Decimals:** 18

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Ethereum development environment (e.g., Remix, Truffle, or Hardhat).
- Access to the OpenZeppelin Solidity contracts.

### Deployment

1. Deploy the `SaberDaleToken` smart contract to the Ethereum network using your preferred development environment.

2. The contract owner should be set upon deployment (you can change this in the constructor parameters).

3. After deployment, the contract owner can mint tokens for various addresses using the `mint` function.

### Interacting with the Contract

You can interact with the deployed contract using web3.js, ethers.js, Remix, or any Ethereum wallet that supports ERC-20 tokens. Here are some common interactions:

- **Transfer Tokens:** Users can transfer tokens to other addresses using standard ERC-20 token transfer functions.

- **Mint Tokens:** Only the contract owner can mint new tokens for specific addresses using the `mint` function.

- **Burn Tokens:** Any user can burn their own tokens using the `burn` function.

## License

This SaberDaleToken (SDT) ERC-20 smart contract is provided under the MIT License. You are free to use, modify, and distribute it as needed.

## Disclaimer

Please exercise caution and follow best practices when deploying smart contracts on the Ethereum network. Make sure to test the contract on a test network before deploying it on the mainnet. The contract owner assumes responsibility for any actions taken with the contract.

For more information on smart contract development, refer to Ethereum's official documentation and security best practices.
