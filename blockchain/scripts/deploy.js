const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
};

const runMain = async () => {
  await main().catch(() => {
    console.error(error);
    process.exit(1);
  });
  process.exit(0);
};

runMain();
