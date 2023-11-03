import Vue from 'vue'
import Vuex from 'vuex'
import VueXAlong from 'vuex-along'
import chain from './modules/chain'
import common from './modules/common'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    chain,
    common
  },
  plugins: [VueXAlong({
    name: 'v-store',
    local: false,
    session: { list: ['web3'], isFilter: true }
  })]
})

export default store
