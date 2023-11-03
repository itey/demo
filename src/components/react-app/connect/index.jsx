import store from '@/store';
import { isEVMProvider } from '@particle-network/connect';
import { ConnectButton, useAccount, useConnectId, useConnectKit, useLanguage, useParticleTheme } from '@particle-network/connect-react-ui';
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import './index.css';
console.log(React.version)

function WalletButton() {

  const connectId = useConnectId();
  const account = useAccount();
  const connectKit = useConnectKit();
  const [loginProcess, setLoginProcess] = useState(false);
  const { changLanguage } = useLanguage();

  /** 区分是否为particle链接方式 */
  useEffect(() => {
    if(connectId === 'particle') {
      store.commit('setIsParticleProvider', true)
    } else {
      store.commit('setIsParticleProvider', false)
    }
  }, [connectId])

  /** 事件监听 */
  useEffect(() => {
    if(connectKit) {
      connectKit.on('connect', (provider) => {
        if (provider && isEVMProvider(provider)) {
          window.web3 = new Web3(provider);
        }
      });
      connectKit.on('disconnect', () => {
        store.dispatch('Logout')
      });
      connectKit.on('chainChanged', (chain) => {
        console.log('chainChanged:', chain)
      });
      connectKit.on('accountsChanged', (accounts) => {
        store.commit('setChainAccount', accounts[0])
        store.dispatch('Login', {address: accounts[0]}).then(() => {
          setLoginProcess(false)
        })
      });
    }
  }, []);


  /** 地址切换 */
  useEffect(() => {
    if(account && loginProcess) {
      store.dispatch('Login', {address: account}).then(() => {
        setLoginProcess(false)
      })
    }
    if(account && !store.state.user.account && !store.state.common.isParticleProvider) {
      connectKit.disconnect({ hideLoading: true });
    }
  }, [account]);
  
  /** 切换主题 */
  const { setTheme } = useParticleTheme();
  useEffect(() => {
    setTheme(store.state.common.theme);
  }, [store.state.common.theme]);

  /** 外部组件按键退出 */
  useEffect(() => {
    if(store.state.user.logout) {
      store.commit('setLogout', false)
      connectKit.disconnect({ hideLoading: true });
    }
  }, [store.state.user.logout]);

  /** 语言切换 */
  useEffect(() => {
    if(store.state.common.language == 'en') {
      changLanguage('en')
    } else {
      changLanguage('zh_TW')
    }
  }, [store.state.common.language]);

  /** 打开Particle钱包 */
  useEffect(() => {
    if(store.state.common.isParticleProvider && store.state.common.openAccount) {
      connectKit.particle.openWallet();
      store.commit('setOpenAccount', false)
    }
  }, [store.state.common.openAccount]);

  /** 打开Particle Buy页面 */
  useEffect(() => {
    if(store.state.common.isParticleProvider && store.state.common.openBuy) {
      connectKit.particle.openBuy();
      store.commit('setOpenBuy', false)
    }
  },[store.state.common.openBuy]);

  return (
    <div>
      <ConnectButton.Custom>
            {({ openConnectModal }) => {

                const handleOpenConnectModal = () => {
                  openConnectModal();
                  setLoginProcess(true);
                }

                return (
                    <div>
                        <button className={'connect-button'} onClick={handleOpenConnectModal} disabled={!!account}>Connect Wallet</button>
                    </div>
                );
            }}
        </ConnectButton.Custom>
    </div>
    )
  
}

export default WalletButton
