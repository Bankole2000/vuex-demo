import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accountBalance: 0,
    exchangeRate: 390,
    exchangeRateAPIKey: "524d9beb65b8e8207c0641c6aff35b4f"
  },
  mutations: {
    DEPOSIT_AMOUNT(state, payload) {
      state.accountBalance += +payload
    },
    WIDTHRAW_AMOUNT(state, payload) {
      state.accountBalance -= payload
    },
    SET_EXCHANGE_RATE(state, payload) {
      state.exchangeRate = payload.rate
    }
  },
  actions: {
    getCurrentExchangeRate({ state, commit },) {
      const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${state.exchangeRateAPIKey}&format=1`
      fetch(url).then((res) => {
        console.log({ res });
        return res.json()
      }).then((data) => {
        console.log({ data });
        const { rates: { NGN } } = data;
        commit('SET_EXCHANGE_RATE', { rate: +NGN.toFixed(2) })
      }).catch((e) => {
        console.log({ e });
      })
    }
  },
  getters: {
    accountBalance: state => `&#8358; ${state.accountBalance.toFixed(2)}`,
    dollarAccountBalance: (state) => {
      const dollarBalance = state.accountBalance / state.exchangeRate;
      return `&#128; ${dollarBalance.toFixed(2)}`;
    }
  },
  modules: {
    ...modules
  }
})
