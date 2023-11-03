
const common = {
  state: {
    language: 'en',
    theme: 'dark',
    openAccount: false,
    openBuy: false,
    isParticleProvider: false,
  },

  mutations: {
    setLanguage: (state, language) => {
      state.language = language
    },
    setTheme: (state, theme) => {
      state.theme = theme
    },
    setOpenAccount: (state, openAccount) => {
      state.openAccount = openAccount
    },
    setOpenBuy: (state, openBuy) => {
      state.openBuy = openBuy
    },
    setIsParticleProvider: (state, isParticleProvider) => {
      state.isParticleProvider = isParticleProvider
    }
  },

  actions: {

  }
}

export default common
