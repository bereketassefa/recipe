<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import HomePageVue from "./Pages/HomePage.vue";

export default {
  watch: {
    $route(to, from) {
      // if(from.path === "/adashboard" && to.path === "/login"){
      //   // if(localStorage.getItem("apollo-token")){
      //     //   console.log("user detected")
      //   // }
      //     this.router.push("/adashboard")
      //   // localStorage.clear()
      // }
      // if (
      //   (from.path === "/login" && to.path === "/dashboard") ||
      //   (from.path === "/login" && to.path === "/adashboard") ||
      //   (from.path === "/new" && to.path === "/dashboard") ||
      //   (from.path === "/dashboard" && to.path === "/login") ||
      //   (from.path === "/adashboard" && to.path === "/login")
      // ) {
      //   // this.$store.dispatch('getAllPromotions')
      //   this.$router.go();
      // }
      
      if (to.path === "/" || to.path === "/signup" || to.path === "/login") {
        var value = localStorage.getItem("role");
        if(localStorage.getItem("apollo-token")){
          
          // this.$router.push("/home");
          this.$router.push("/loged/6b57e448-240e-4d89-a229-6a8fb0f1fe6f");
        } 
      }
      // if(to.path !== from.path){
      //   // console.log(to.path , from.path)
      //   // this.$router.pash(to.path)
      //   let a = localStorage.getItem("stat")
      //   console.log(a)
      //   console.log(a == "fre" , a == "ref")
      //   if(a == "fre"){
          
      //     localStorage.setItem("stat" , "ref")
      //     let b = localStorage.getItem("stat")
      //     console.log("will be refreshed" , b)
      //     this.$router.go()
          
      //   }

      // }
    },
  },
  components: {
    HomePageVue,
  },
};
</script>

<template>
  <!-- <HomePageVue/> -->
  <router-view />
  <!-- <router-view :key="localhost/dashboard"></router-view> -->
  <!-- <h1>soem</h1> -->
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
