import userUseCase from './modal/user'
import store from '@/domain/store'
 import _server from '@/domain/services'
let user=userUseCase({store,api:_server.API})
 
export default {user}
