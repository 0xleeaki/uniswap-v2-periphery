import { ethers } from 'hardhat'

async function main() {
  const routerFactory = await ethers.getContractFactory('UniswapV2Router02')
  const router = await routerFactory.deploy(
    '0x5558C5D2eba6f1eDebBc730c4E6F48ea25D48bbB',
    '0xd0A1E359811322d97991E03f863a0C30C2cF029C'
  )
  await router.deployed()

  console.log('router deployed to:', router.address)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
