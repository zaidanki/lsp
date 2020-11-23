<template>
<div>
  <div v-if="!auth">
    <v-card dark>
      <h1>You are not authorized to see this page, please Log In</h1>
      <v-btn color="white" style="color: black;" to="/Admin">Log In Here</v-btn>
    </v-card>

  </div>
  <div v-if="auth" class="about">
    <v-card 
    dark
    >
  
      <h1>This is an uploading page</h1>
    </v-card>
    
  </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    auth: localStorage['Auth']
  })
}
</script>