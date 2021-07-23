
export default {
    namespaced: true,

    state: {
        user:{name:"saeed alabidi",email:"saeed1adm@gmail.com"}
    },
    mutations: {
      SET_USER1(state,data){ state.user.name = data}
    },

    actions: {
         setUser1({commit},data) {commit('SET_USER1',data)}

    },

    getters: {
        getUser1: state => () => state.user
    },

  }