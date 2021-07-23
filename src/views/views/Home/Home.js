
import usecase from "@/domain/usecase";
import doctorjs from '../../core/example'

let brain = {

  beforeRouteEnter(routeTo, routeFrom, next) {
    usecase.user.updateUser({id:1}).then(() => {
      next()
    });
  },



  beforeRouteUpdate(routeTo, routeFrom, next) {
    usecase.user.updateUser({id:1 }).then(() => {
      next()
    });

  },

  
  data() {
    return {
      isActive: false,
      lang: 'ar',
      user:this.$store.state.user.user,
      employes:this.$store.state.employes.user,
    };
  },
 

  methods: {
    
    
    go:()=> usecase.user.updateUser({id:parseInt((Math.random() * 10) + 1)}),

    changeLang() {
      this.lang = this.$root.$i18n.locale = this.$root.$i18n.locale == 'en' ? 'ar' : 'en'
    }




  }
};


export default brain