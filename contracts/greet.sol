// SPFX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract greet {
    uint256 greetingsAmount;

    function giveGreeting() public {
        greetingsAmount += 1;
    }

    function getGreetings() public view returns (uint256) {
        return greetingsAmount;
    }
}
