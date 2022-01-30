//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Transactions {
  uint256 public transactionCount;
  TransferStruct[] public transactions;

  struct TransferStruct {
    address sender;
    address receiver;
    uint256 amount;
    string message;
    uint256 timestamp;
    string keyword;
  }

  event Transfer(address _sender, address _receiver, uint256 _amount, string _message, uint256 _timestamp, string _keyword);

  function addToBlockchain(address payable _receiver, uint256 _amount, string memory _message, string memory _keyword) public {
    transactionCount++;
    transactions.push(TransferStruct(msg.sender, _receiver, _amount, _message, block.timestamp, _keyword));
    
    emit Transfer(msg.sender, _receiver, _amount, _message, block.timestamp, _keyword);
  }
}
