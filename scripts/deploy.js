
const hre = require("hardhat");

async function main() {


  const lock = await hre.ethers.deployContract("Registry");

  await lock.waitForDeployment();

  console.log(
    `${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f