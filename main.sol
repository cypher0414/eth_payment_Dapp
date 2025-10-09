// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PaymentContract {
    event PaymentMade(address indexed from, address indexed to, uint256 amount);

    function pay(address payable _to) external payable {
        require(msg.value > 0, "Must send ETH");
        (bool success, ) = _to.call{value: msg.value}("");
        require(success, "Transfer failed");
        emit PaymentMade(msg.sender, _to, msg.value);
    }
}
