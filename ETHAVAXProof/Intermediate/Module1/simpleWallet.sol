// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleWallet {
    uint256 public balance;

    function deposit(uint256 _value) public payable {
        balance += _value;
    }

    function withdraw(uint256 _amount) public {
        // Use require to check if the amount is not greater than the contract's balance
        require(_amount <= balance, "Insufficient balance");

        // Use assert to check for overflow (although it's unlikely to occur in this simple example)
        assert(balance - _amount <= balance);

        // Use revert to revert the transaction if the conditions are not met
        // This also provides a custom error message
        if (_amount > balance) {
            revert("Withdrawal amount exceeds balance");
        }

        // If all checks pass, transfer the funds and update the balance
        balance -= _amount;
    }

    function getBalance() public view returns (uint256) {
        return balance;
    }
}
