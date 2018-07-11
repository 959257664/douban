export default {
  state: {
    show: false
  },
  getters: {
    not_show (state) {
      return !state.show
    }
  },
  mutations: {
    switch_dialog (state) {
      state.show = state.show ? false : true
    }
  },
  actions: {
    switch_dialog ({commit}) {
      commit('switch_dialog')
    }
  }
}
