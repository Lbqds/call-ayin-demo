import { GetAyinTokenPair } from './artifacts/ts/scripts'
import { registerContract } from './artifacts/ts/contracts'
import { getAllContracts as getAllAyinContracts } from './ayin-artifacts/ts'
import { addressFromContractId, binToHex, contractIdFromAddress, NodeProvider, web3 } from '@alephium/web3'

function registerAyinContracts() {
  const ayinContracts = getAllAyinContracts()
  console.log(`ayin contracts: ${ayinContracts.length}`)
  ayinContracts.forEach((c) => registerContract(c))
}

async function test() {
  registerAyinContracts()

  const nodeProvider = new NodeProvider('https://node.mainnet.alephium.org')
  web3.setCurrentNodeProvider(nodeProvider)
  const tokenPairFactoryAddress = 'vyrkJHG49TXss6pGAz2dVxq5o7mBXNNXAV18nAeqVT1R'
  const tokenPairFactoryId = contractIdFromAddress(tokenPairFactoryAddress)
  const result = await GetAyinTokenPair.call({
    initialFields: {
      ayinPairFactory: binToHex(tokenPairFactoryId),
      firstTokenId: '0000000000000000000000000000000000000000000000000000000000000000',
      secondTokenId: '1a281053ba8601a658368594da034c2e99a0fb951b86498d05e76aedfe666800'
    },
    interestedContracts: [tokenPairFactoryAddress]
  })
  const tokenPairId = result.returns
  const tokenPairAddress = addressFromContractId(tokenPairId)
  console.log(`ALPH-AYIN: ${tokenPairAddress}`)
}

test()
