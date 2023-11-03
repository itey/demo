import store from '@/store/index';
import { WalletEntryPosition } from '@particle-network/auth';
import { BNBChainTestnet } from '@particle-network/chains';
import { evmWallets } from '@particle-network/connect';
import { ModalProvider } from '@particle-network/connect-react-ui';
import '@particle-network/connect-react-ui/dist/index.css';
import React from 'react';
import ConnectButton from '../connect';
console.log(React.version)

const projectId = store.state.chain.projectId
const clientKey = store.state.chain.clientKey
const appId = store.state.chain.appId
const walletId = store.state.chain.walletProjectId

const config = {
  projectId: projectId,
  clientKey: clientKey,
  appId: appId,
  chainName: BNBChainTestnet.name,
  chainId: BNBChainTestnet.id,
  chains: [
    BNBChainTestnet
  ],
  particleWalletEntry: {
    displayWalletEntry: true,
    defaultWalletEntryPosition: WalletEntryPosition.BR,
    supportChains: [
      BNBChainTestnet
    ],
    customStyle: {},
  },
  securityAccount: {
    promptSettingWhenSign: 2,
    promptMasterPasswordSettingWhenLogin: 2
  },
  wallets: evmWallets({
    projectId: walletId,
    showQrModal: false
  })
}

function ParticleButton({theme, lang}) {
  return (
    <div>
      <ModalProvider
        options={config}
        theme={theme}
        language={lang}   //optional：localize, default en
        walletSort={['Particle Auth', 'Wallet']} //optional：walelt order
        particleAuthSort={undefined}
      >
        <ConnectButton/>
      </ModalProvider>
    </div>
  )
}
export default ParticleButton
