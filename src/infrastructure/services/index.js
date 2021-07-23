import log from './log' 
import vuxLocal from './vuexLocal' 
import server from './server' 
import CryptoAES from 'crypto-js'
import constraints from '@/constraints'
 

const vxLocal= vuxLocal({storageKey:constraints.environment.vxLocal.storageKey,encryptionToken:constraints.environment.vxLocal.encryptionToken,CryptoAES,storageType:constraints.environment.vxLocal.storageType});
const API=server({publicToken:constraints.environment.server.publicKey,baseURL:constraints.environment.server.url})
 
 export default {vxLocal,API,log};