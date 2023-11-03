
import store from '@/store'
import { login } from '@/utils/http'
import { loginWalletSign } from '@/utils/web3/chain'
import Vue from 'vue'

const user = {
  state: {
    token: undefined,
    userId: undefined,
    account: undefined,
    logout: false
  },

  mutations: {
    setToken: (state, token) => {
      state.token = token
    },
    setUserId: (state, userId) => {
      state.userId = userId
    },
    setUserAccount: (state, account) => {
      state.account = account
    },
    setLogout: (state, logout) => {
      state.logout = logout
    }
  },

  actions: {
    // 登录
    Login({ commit }, payload) {
      const currentAccount = store.state.user.account
      if (currentAccount && currentAccount.toUpperCase() === payload.address.toUpperCase()) {
        return
      }
      return new Promise((resolve) => {
        loginWalletSign(payload.address).then((signed) => {
          login({ address: payload.address, signed: signed }).then(res => {
            const userId = res.data.id
            const token = res.data.token
            commit('setToken', token)
            commit('setUserId', userId)
            commit('setUserAccount', payload.address)
            commit('setChainAccount', payload.address)
            store.dispatch('getBalanceOfBnb')
            store.dispatch('getBalanceOfMbd')
            resolve()
          }).catch(error => {
            console.log(error)
            commit('setLogout', true)
            Vue.$toast.warning(error)
          })
        }).catch(error => {
          console.log(error)
          commit('setLogout', true)
          Vue.$toast.warning(error)
        })
      })
    },
    // 退出登录
    Logout({ commit }) {
      commit('setToken', '')
      commit('setUserId', '')
      commit('setUserAccount', '')
      commit('setChainAccount', '')
      commit('setBalanceMbd', '')
      commit('setBalanceBnb', '')
      commit('setLogout', true)
    }
  }
}

export default user
