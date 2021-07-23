import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueI18n from "vue-i18n";
import Vuex from 'vuex'

import usecase from '../../src/domain/usecase'
import employes from'../../src/infrastructure/store/modules/employes'
import user from'../../src/infrastructure/store/modules/user'
import home from '../../src/views/views/home/Home.vue'


describe('home.vue', () => {
 const localVue = createLocalVue();
 localVue.use(Vuex);
 localVue.use(VueI18n);
 let i18n =null;
 let store=null;
  beforeEach(() => {
    
    usecase.user.updateUser=(callback)=>{
       
      user.state.user="saeed";
       
    }
    i18n = new VueI18n({});
    store = new Vuex.Store({
      modules: {
        employes,user
      }
    })
  })

  it('must update user status and return saeed',async () => {
 
     const wrapper = shallowMount(home, { store, i18n,localVue })
    const button = wrapper.find('#load')
     await button.trigger('click')
  
    expect(user.state.user).toEqual("saeed")
  })
})
