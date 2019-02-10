import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// TYPES
const SET_CHOSEN_CITY = 'SET_CHOSEN_CITY'

// STATE
const state = {
  chosenCity: 'Leeds, UK'
}

// MUTATIONS
const mutations = {
  [SET_CHOSEN_CITY] (state, obj) {
    state.chosenCity = obj
  }
}

// ACTIONS
const actions = ({
  setChosenCity ({ commit }, obj) {
    commit(SET_CHOSEN_CITY, obj)
  }
})

// GETTERS
const getters = ({
  getChosenCity: (state) => {
    return state.chosenCity
  }
})

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
