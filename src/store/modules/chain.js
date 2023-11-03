
import store from '@/store';
import { balanceOfBnb } from '@/utils/web3/chain';
import { balanceOfMbd } from '@/utils/web3/mbd';

const projectId = process.env.VUE_APP_PROJECT_ID;
const clientKey = process.env.VUE_APP_CLIENT_KEY;
const appId = process.env.VUE_APP_APP_ID;
const walletProjectId = process.env.VUE_APP_WALLETCONNECT_PROJECT_ID;

const chain = {
  state: {
    projectId: projectId,
    clientKey: clientKey,
    appId: appId,
    walletProjectId: walletProjectId,
    account: undefined,
    balanceBnb: undefined,
    balanceMbd: undefined
  },

  mutations: {
    setChainAccount(state, account) {
      state.account = account
    },
    setBalanceBnb(state, balance) {
      state.balanceBnb = balance
    },
    setBalanceMbd(state, balance) {
      state.balanceMbd = balance
    }
  },

  actions: {
    // 获取BNB余额
    async getBalanceOfBnb({ commit }) {
      const account = store.state.chain.account
      const balance = await balanceOfBnb(account)
      commit('setBalanceBnb', balance)
    },
    // 获取MBD余额
    async getBalanceOfMbd({ commit }) {
      const account = store.state.chain.account
      const balance = await balanceOfMbd(account)
      commit('setBalanceMbd', balance)
    },
  }
}

export default chain
