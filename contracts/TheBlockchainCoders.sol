// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TheBlockchainCoders {
    string public name = "Belajar Belock Chain";
    string public symbol = "BBC";
    string public standard = "@belajarblockchain v0.0.1";
    uint256 public totalSuply;
    address public ownerOfContract;
    uint256 public _userId;

    address[] public holderToken;
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    struct TokenHolderInfo {
        uint256 _tokenId;
        address _from;
        address _to;
        uint256 _totalToken;
        bool _tokenHolder;
    }

    mapping(address => TokenHolderInfo) public tokenHolderInfos;
    mapping(address => uint256) public balanceOF;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor(uint256 _initialSupply) {
        ownerOfContract = msg.sender;
        balanceOF[msg.sender] = _initialSupply;
        totalSuply = _initialSupply;
    }

    // halper function
    function inc() internal {
        _userId++;
    }

    // transfer function
    function transfer(
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(balanceOF[msg.sender] >= _value, "saldo anda kurang");
        inc();

        balanceOF[msg.sender] -= _value;
        balanceOF[_to] += _value;

        TokenHolderInfo memory tokenHolderInfo = tokenHolderInfos[_to];

        tokenHolderInfo._from = msg.sender;
        tokenHolderInfo._to = _to;
        tokenHolderInfo._tokenHolder = true;
        tokenHolderInfo._tokenId = _userId;
        tokenHolderInfo._totalToken = _value;

        holderToken.push(_to);
        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    // transefer from
    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(balanceOF[msg.sender] >= _value, "saldo anda kurang");
        require(allowance[_from][msg.sender] >= _value, "saldo anda kurang");

        balanceOF[_to] += _value;
        balanceOF[_from] -= _value;

        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);

        return true;
    }

    // get token gholder data
    function getTokenHolderData(address _address) public view  returns (uint256, address, address, uint256, bool) {
        return(
            tokenHolderInfos[_address]._tokenId,
            tokenHolderInfos[_address]._from,
            tokenHolderInfos[_address]._to,
            tokenHolderInfos[_address]._totalToken,
            tokenHolderInfos[_address]._tokenHolder
        );
    }

    // get token holder
    function getTokenHolder() public view returns (address[] memory) {
        return holderToken;
    }
}
