import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from "firebase"
Vue.config.productionTip = false


var firebaseConfig = {
    apiKey: "AIzaSyCKwjl_RnsyIQQEqNWVuM3RxrpNwF1uLhg",
    authDomain: "fameappcen.firebaseapp.com",
    databaseURL: "https://fameappcen.firebaseio.com",
    projectId: "fameappcen",
    storageBucket: "fameappcen.appspot.com",
    messagingSenderId: "704771022436",
    appId: "1:704771022436:web:3296128fdecd6b1b908971",
    measurementId: "G-Y6V0REHC1Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
