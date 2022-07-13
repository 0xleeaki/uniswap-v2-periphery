import '@nomiclabs/hardhat-waffle'
import '@nomicfoundation/hardhat-toolbox'
import { HardhatUserConfig } from 'hardhat/config'

import '@nomiclabs/hardhat-etherscan'

const SCAN_API_KEY = ''

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.6.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  networks: {
    kovan: {
      url: 'https://kovan.infura.io/v3/KEY',
      chainId: 42,
      accounts: ['PRIVATE_KEY']
    }
  },
  etherscan: {
    apiKey: SCAN_API_KEY
  }
}

export default config
