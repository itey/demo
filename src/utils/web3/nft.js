import nft from '@/assets/abi/nft.json'
import i18n from '@/i18n'
import store from '@/store'
import { Notification } from 'element-ui'
import { checkAccount } from './chain'

/** 获取NFT合约 */
function getNFTContract() {
  const web3 = window.web3
  if (!web3) {
    Notification({
      title: i18n.t('common.warning'),
      message: i18n.t('common.need_reconnect_wallet'),
      type: 'warning'
    })
    return
  }
  return new web3.eth.Contract(nft.abi, process.env.VUE_APP_NFT)
}

/** 创作者铸造NFT */
export function nftMint(tokenURI, initAmount, priceTokenType, priceAsset, priceTokenIdOrAmount, maxSupply) {
  if (!checkAccount()) {
    return
  }
  const nftContract = getNFTContract()
  const toAddress = store.state.chain.account
  return new Promise((resolve, reject) => {
    nftContract.methods.authorise(tokenURI, initAmount, priceTokenType, priceAsset, priceTokenIdOrAmount, maxSupply)
      .send({ from: toAddress })
      .on('transactionHash', (hash) => {
        console.log('transactionHash:', hash)
      })
      .on('receipt', (receipt) => {
        resolve(receipt)
      })
      .on('error', (error) => {
        reject(error.message)
      })
  })

}
