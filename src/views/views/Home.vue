<template>
  <div class="home">

  <button   type="button" @click="changeLang">{{lang}}</button>

    <br/><br/><br/>
    <h1>{{$t('hello')}}</h1>
    <br/><br/><br/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    static data
    <br />
    developer&nbsp; name=&nbsp;&nbsp; {{employes.name}}
    <br />
    developer &nbsp; email=&nbsp;&nbsp; {{employes.email}}
    <br />
    <br />
    <br />
    <button id="load" :disabled="isActive" type="button" @click="go">Fetch Data</button>
    <br />
    <br />api data persistence
    <br />
    id=&nbsp;&nbsp;{{user.id}}
    <br />
    userId=&nbsp;&nbsp;{{user.userId}}
    <br />
    title=&nbsp;&nbsp;{{user.title}}
    <br />
    completed=&nbsp;&nbsp;{{user.completed}}
  </div>
</template>

<script>
import { mapState } from "vuex";
import user from "@/domain/usecase";

export default {

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
</script>
