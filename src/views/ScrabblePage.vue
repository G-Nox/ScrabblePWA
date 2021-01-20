<template>
  <v-container class="my-2">
    <v-row>
      <v-col>
        <Grid />
        <Hand />
      </v-col>
      <v-col>
        <Info />
      </v-col>
    </v-row>
    <v-overlay :value="!isConnected">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import Grid from "../components/v-grid";
import Hand from "../components/v-hand";
import Info from "../components/v-info";
import router from "../router/index";

export default {
  name: "ScrabblePage",
  components: {
    Grid,
    Hand,
    Info
  },
  computed: {
    isConnected() {
      return this.$store.state.isConnected;
    }
  },
  mounted() {
    if (!this.isConnected) {
      this.$store.dispatch("connectWebsocket");
    }
  },
  beforeUpdate() {
    console.log(this.isConnected);
    if (!this.isConnected) {
      router.push("Offline");
    }
  }
};
</script>

<style>
.header {
  padding: 2em;
  width: 100%;
  background-color: red;
}

.playPage {
  display: flex;
  /*background: linear-gradient(180deg, #f8fff8 20%, #d9e7ff 100%);*/
  height: 100%;
  width: 100%;
  margin-top: 6.5em;
}

.myGrid {
  display: flex;
  padding: 0.5em;
  flex-direction: column;
  align-items: center;
}

.myRow {
  display: flex;
}

.myCell {
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 2.3em;
  min-height: 2.3em;
  border-radius: 0.3em;
  margin: 0.1em;

  background: #f0f0f0;
  box-shadow: inset 2px 2px 3px 3px rgba(150, 150, 150, 0.2);

  font-weight: bold;
}

.myLabel {
  border: none;
  background: #4d8080;
  color: white;
  box-shadow: none;
}

.myHand {
  display: flex;
  padding: 0.5em;
  background: #4d8080;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.myCard {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 2.3em;
  min-height: 2.3em;
  border-radius: 0.3em;
  margin: 0.1em;

  background-image: url("../assets/card.png");
  background-size: cover;
  box-shadow: 2px 2px 1px 1px rgba(100, 100, 100, 0.2);
  font-weight: bold;
}

.myCharacter {
  font-size: 1.2em;
}

.myPoint {
  position: absolute;
  right: 0.2em;
  bottom: 0.08em;
  font-size: 0.7em;
}

.active {
  color: red;
}

.activeDiv {
  border: 2px solid #ff0000;
}

.home img {
  width: 30%;
  min-width: 200px;
}

.btn svg {
  margin: 0 3px 3px 0;
}

@media only screen and (max-width: 800px) {
  * {
    font-size: 3vw;
  }
  .myCell {
    min-width: 5vw;
    min-height: 5vw;
    font-size: 2.5vw;
  }
  .myHand {
    min-width: 2em;
    min-height: 2em;
    font-size: 0.7em;
  }
}
</style>
