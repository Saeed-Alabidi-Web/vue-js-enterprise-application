import repos from '../repository'
import services from '@/infrastructure/core/asyncMiddleware'
import userUseCase from './user/user'


let user=userUseCase({services,repos}) 
export default {user}

 

