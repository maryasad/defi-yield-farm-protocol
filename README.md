# DeFi Yield Farming Protocol

A modern DeFi yield farming protocol built with Hardhat and Solidity. This project demonstrates professional-grade smart contract development with security best practices.

## Features

- ERC20 Staking Token
- ERC20 Reward Token
- Yield Farming contract with:
  - Secure staking mechanism
  - Time-based reward distribution
  - Anti-flash loan protection
  - Emergency withdrawal functionality
  - Owner controls for reward rate

## Technical Stack

- Solidity ^0.8.19
- Hardhat Development Environment
- OpenZeppelin Contracts
- ethers.js

## Security Features

- ReentrancyGuard for protection against reentrancy attacks
- SafeMath for mathematical operations
- Access Control using Ownable
- Emergency withdrawal function
- Proper input validation

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Compile contracts:
```bash
npx hardhat compile
```

3. Run tests:
```bash
npx hardhat test
```

4. Deploy to local network:
```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

## Contract Details

### StakingToken (STK)
- ERC20 token that users can stake
- Initial supply: 1 million tokens
- Mintable by owner

### RewardToken (RWD)
- ERC20 token given as rewards
- Initial supply: 1 million tokens
- Mintable by owner

### YieldFarm
- Handles staking of STK tokens
- Distributes RWD tokens as rewards
- Configurable reward rate
- Real-time reward calculation
- Secure withdrawal mechanism

## Usage

1. Users can stake their STK tokens using the `stake()` function
2. Rewards accumulate over time based on the reward rate
3. Users can claim rewards using `getReward()`
4. Users can withdraw their staked tokens using `withdraw()`

## Advanced Features

- Dynamic reward rate adjustable by owner
- Real-time reward calculation based on time and stake amount
- Protection against common DeFi vulnerabilities
- Emergency functions for risk management
