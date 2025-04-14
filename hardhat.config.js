// Hardhat configuration file

require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
    solidity: {
          version: '0.8.19',
          settings: {
                  optimizer: {
                            enabled: true,
                            runs: 1000000,
                  },
          },
    },
    networks: {
          mainnet: {
                  url: process.env.ALCHEMY_MAINNET || '',
                  accounts: [process.env.DEPLOYER_KEY || ''],
          },
    },
    etherscan: {
          apiKey: process.env.ETHERSCAN_KEY || '',
    },
};
