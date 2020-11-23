<template>
  <v-app>
    <v-img style="height: 100vh" :src="bgImg">
    <v-app-bar
      app
      flat
      class="transparent"
      dark
      style="margin: 0.5% 7%"
    >
      <div class="d-flex align-center">
        <router-link to="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="logoImg"
          transition="scale-transition"
          width="200"
          
        />
</router-link>
        
          
      </div>

      <v-spacer></v-spacer>
      <v-card :key="keyofauth" outlined class="transparent" >
      <v-btn  v-if="!auth" rounded depressed style="color:black" color="white" to="/Admin">Admin Login</v-btn>
      <v-btn  v-else @click="logout()" rounded depressed style="color:black" color="white" >Logout</v-btn>
      </v-card>
    </v-app-bar>

    <v-main>
      <router-view></router-view>   
    </v-main>
    </v-img>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import bgImg from './assets/Pictures/main-bg.jpg'
import logoImg from './assets/logo.png'

export default {
  name: 'App',

  components: {
    // HelloWorld,

  },


  data: () => ({
    bgImg,
    logoImg,
    auth: localStorage['Auth'],
    keyofauth: 1,
  }),
  methods: {
    logout(){
      localStorage['Auth'] = ""
      this.$router.push(this.$route.query.redirect || '/')
     location.reload()
    }
  },
};
</script>
