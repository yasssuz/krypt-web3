//https://eth-ropsten.alchemyapi.io/v2/-8t36MP4s9I5Cj9G9WnWj2B7rKDUi3Ox

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/-8t36MP4s9I5Cj9G9WnWj2B7rKDUi3Ox",
      accounts: [
        // removed for security reasons
      ],
    },
  },
};
