<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          contain
          src="./assets/logo_long.png"
          transition="scale-transition"
          max-width="200"
        />
      </div>

      <v-spacer></v-spacer>
      <router-link class="mr-2" to="/">
        <v-btn class="white--text primary" target="_blank" text> Home </v-btn>
      </router-link>
      <router-link class="mr-2" to="/Scrabble">
        <v-btn class="white--text primary" target="_blank" text> Play </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <link href="Scrabble" rel="stylesheet" />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>
