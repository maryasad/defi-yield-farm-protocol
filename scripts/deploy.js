const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy StakingToken
  const StakingToken = await ethers.getContractFactory("StakingToken");
  const stakingToken = await StakingToken.deploy();
  console.log("StakingToken deployed to:", await stakingToken.getAddress());

  // Deploy RewardToken
  const RewardToken = await ethers.getContractFactory("RewardToken");
  const rewardToken = await RewardToken.deploy();
  console.log("RewardToken deployed to:", await rewardToken.getAddress());

  // Deploy YieldFarm
  const YieldFarm = await ethers.getContractFactory("YieldFarm");
  const yieldFarm = await YieldFarm.deploy(
    await stakingToken.getAddress(),
    await rewardToken.getAddress()
  );
  console.log("YieldFarm deployed to:", await yieldFarm.getAddress());

  // Transfer some reward tokens to the YieldFarm contract
  const transferAmount = ethers.parseEther("100000"); // 100,000 tokens
  await rewardToken.transfer(await yieldFarm.getAddress(), transferAmount);
  console.log("Transferred reward tokens to YieldFarm contract");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
