# ERC20 Token and Vault Smart Contract

This project consists of two Ethereum smart contracts: `ERC20.sol` and `Vault.sol`. The `ERC20.sol` contract implements a basic ERC-20 token, while the `Vault.sol` contract is a simple vault that allows users to deposit and withdraw ERC-20 tokens.

## ERC20.sol

The `ERC20.sol` contract is an implementation of the ERC-20 standard token. It includes the following functionalities:

- **Token Details:**
  - Name: Solidity by Example
  - Symbol: SOLBYEX
  - Decimals: 18
  - Initial supply is set to 0.

- **Token Operations:**
  - `transfer`: Transfer tokens from the sender to a specified recipient.
  - `approve`: Allow a spender to spend a specified amount of tokens on behalf of the owner.
  - `transferFrom`: Transfer tokens from one address to another, given approval.
  - `mint`: Mint new tokens and assign them to the sender.
  - `burn`: Burn tokens from the sender's balance.

## Vault.sol

The `Vault.sol` contract is a basic vault that allows users to deposit and withdraw ERC-20 tokens. It interacts with the `IERC20` interface, assuming the ERC-20 token implements the standard methods. The key functionalities are:

- **Vault Initialization:**
  - The contract is initialized with an ERC-20 token address.

- **Deposit:**
  - Users can deposit ERC-20 tokens into the vault.
  - The number of shares received is based on the current total supply and the amount deposited.

- **Withdraw:**
  - Users can withdraw ERC-20 tokens from the vault.
  - The amount withdrawn is based on the user's shares and the total supply.

### Usage

1. Deploy `ERC20.sol` to create the ERC-20 token.
2. Deploy `Vault.sol`, passing the ERC-20 token address to the constructor.
3. Interact with the ERC-20 token using the standard methods.
4. Deposit tokens into the vault using the `deposit` function.
5. Withdraw tokens from the vault using the `withdraw` function.

### Important Notes

- Ensure proper understanding of ERC-20 token standards before using these contracts.
- Be cautious about reentrancy and other security considerations.
- This code is provided as an example and may require additional testing and security audits before use in production.