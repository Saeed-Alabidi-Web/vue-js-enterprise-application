
import { mapState } from "vuex";
import user from "@/domain/usecase";
import   doctorjs from '../Core/example'


let brain= {

  beforeRouteEnter(routeTo, routeFrom, next){
 user.user.getDataUser().then(()=>{next()});
 }, 
 



  beforeRouteUpdate(routeTo, routeFrom, next){
   user.user.getDataUser().then(()=>{next()});
  
 },


  data() {
    return { isActive: false,lang:'ar' };
  },



  computed: {
    ...mapState({
      user: state => state.user.user,
      employes: state => state.employes.user
    })
  },




  methods: {
    go() {
      
       this.isActive = true;
      user.user.updateUser({handler:() => {
        this.isActive = false;
      }});
    },

    changeLang(){
    
    let lan=this.$root.$i18n.locale=='en'?'ar':'en';
    this.$root.$i18n.locale=lan;
    this.lang=lan=='en'?'ar':'en';
    }


  }
};


export default brain