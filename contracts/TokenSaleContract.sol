// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TheBlockchainCoders.sol";

contract TokenSale {
    address admin;
    TheBlockchainCoders public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokenSold;

    event Sell(address _buyer, uint256 _amount);

    constructor(TheBlockchainCoders _tokenContract, uint256 _tokenPrice) {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    function multiply(uint256 x, uint256 y) public pure returns (uint256 z) {
        require(y == 0 || (z = x * y) / y == x);
    }

    // buy token
    function buyToken(uint256 _numberOfToken) public payable {
        require(msg.value == multiply(_numberOfToken, tokenPrice));
        require(tokenContract.balanceOF(address(this)) >= _numberOfToken);
        require(
            tokenContract.transfer(
                msg.sender,
                _numberOfToken * 1000000000000000000
            )
        );
        tokenSold += _numberOfToken;
        emit Sell(msg.sender, _numberOfToken);
    }

    function endSale() public {
        require(msg.sender == admin);
        require(
            tokenContract.transfer(
                admin,
                tokenContract.balanceOF(address(this))
            )
        );

        payable(admin).transfer(address(this).balance);
    }
}
