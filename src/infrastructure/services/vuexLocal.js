import VuexPersistence from 'vuex-persist'
export default ({storageKey,encryptionToken,CryptoAES,storageType} )=> { 
   return ( reducer)=>
    { 
      
      return new VuexPersistence({
         storage: {
            getItem: () => {
               const store = window.localStorage.getItem(storageKey);
        
              if (store) {
                try {
                  const bytes = CryptoAES.AES.decrypt(store, encryptionToken);
                   return JSON.parse(bytes.toString(CryptoAES.enc.Utf8));
                } catch (e) {
                   window.localStorage.removeItem(storageKey);
                }
              }
        
              return null;
            },
            setItem: (key, value) => {
               const store = CryptoAES.AES.encrypt(value, encryptionToken).toString();
                return window.localStorage.setItem(storageKey, store);
            },
          key:storageKey, 
          },
         reducer
      })}
    
       
}
 
 
 