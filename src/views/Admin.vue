<template>
  <div class="admin">
    <br>
    <br>
    <v-card 
    dark
    outlined
    tile
    class="transparent"
    align="center"
    >
  <v-card style="top: 80%" tile outlined height="300" width="500" class="px-12">
    <br>
    <br>
      <form v-if="!loginauth">
        <v-text-field box label="Username" v-model="username"></v-text-field>
        <v-text-field box label="Password" v-model="password"></v-text-field>
        <br>
        <v-btn style="color: black" @click="login()" color="white">Log In</v-btn>
      </form>
      <v-btn v-if="loginauth" @click="logout()">Log Out</v-btn>
      </v-card>
    </v-card>
    
  </div>
</template>
<script>
import firebase from "firebase";
export default {
    name: 'HelloWorld',

    data: () => ({
      username: "",
      password: "",
      loginauth: localStorage['Auth']
      
    }),
    methods: {
      login(){
        firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
          () => localStorage['Auth'] = true).then( () => 
             this.$router.push(this.$route.query.redirect || '/upload'
             ).then( () => location.reload()),
          err => {
            alert(err);
          }
        )
      },
      logout(){
        localStorage['Auth'] = ""
        this.$router.push(this.$route.query.redirect || '/')
         location.reload()
      }
    },
  }
  
  
</script>
<style scoped>



</style>