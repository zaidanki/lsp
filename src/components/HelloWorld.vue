<template>
  <v-container>
<br>
<br>
    <v-row class="text-center">
    
      <v-col cols="12" class="mb-4">
        <h1 style="color: white;" class="display-4 font-weight-bold mb-3">
         Faculty of <br> Engineering
        </h1>


      </v-col>
<v-col cols='2'></v-col>
      <v-col
        class="mb-5"
        cols="4"
        align="right"
      >
  <v-hover v-slot="{ hover }">

    <v-card
    to="/pastexampapers"
      class="mx-auto"
      dark 
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        :src="pePic"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            Past Exam Papers
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >

      
        <div class="font-weight-light grey--text title mb-2">
  
        </div>
        <h3 align="center" class="display-1 font-weight-light grey-text mb-2">
          Past Exam Papers
        </h3>

      </v-card-text>
    </v-card>
  </v-hover>
      </v-col>
            <v-col
        class="mb-5"
        cols="4"
        align="left"
      >
       <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto"
      dark
      max-width="600"
      to='/Internships'
    >

      <v-img
        :aspect-ratio="16/9"
        :src="isPic"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            Internship Reports
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >

      
        <div class="font-weight-light grey--text title mb-2">
  
        </div>
        <h3 align="center" class="display-1 font-weight-light grey-text mb-2">
          Internship Reports
        </h3>

      </v-card-text>
    </v-card>
  </v-hover>
      </v-col>

     
    </v-row>
  </v-container>
</template>

<script>
import pePic from "../assets/Pictures/past-exams.jpg"
import isPic from "../assets/Pictures/internships.jpg"

  export default {
    name: 'HelloWorld',

    data: () => ({
      pePic,
      isPic,
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
<style>

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

</style>