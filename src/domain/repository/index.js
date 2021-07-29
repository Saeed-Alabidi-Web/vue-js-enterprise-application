import constraints from '@/constraints'
import store from '@/infrastructure/store'
import api from '@/infrastructure/services'  
import _userRepos from './user'


let userRepos=_userRepos({constraints,store, api:api.API}) 
export default {userRepos}

 

