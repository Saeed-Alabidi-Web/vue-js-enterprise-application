import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default ({_modules,persistence} )=> { 

    return new Vuex.Store({
       
        modules:_modules,
        plugins: [persistence.plugin]

    })
       
}



