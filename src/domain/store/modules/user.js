
export default {
    namespaced: true,

    state: {
        user:{}
    },
    mutations: {
        SET_USER1(state,data){ state.user = data}
    },

    actions: {
        setUser({commit},data) {return commit('SET_USER1',data)}

    },

    getters: {
        getUser: state => () => state.user
    },

  }