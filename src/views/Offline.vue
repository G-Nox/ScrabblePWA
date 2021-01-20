<template>
  <div
    class="position-absolute vh-100 vw-100 d-flex align-items-center justify-content-center text-center"
  >
    <div class="m-auto" style="height: 75vh">
      <h1>Opps! Server is offline. Try again later!</h1>
      <router-link className="text-decoration-none" to="/">
        <h1>Take me home</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
import router from "../router/index";

export default {
  computed: {
    isConnected() {
      return this.$store.state.isConnected;
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    isConnected: function(newVal, oldVal) {
      if (newVal) {
        router.push("Scrabble");
      }
    }
  }
};
</script>
