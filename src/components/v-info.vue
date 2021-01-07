<template>
    <v-container class="pa-0">
    <v-card class="pa-4" elevation="3">
        <v-row class="d-flex mb-2 justify-space-between">
            <v-col>
                <v-card
                    class="pa-2"
                    :class="{ active: isPlayerA }"
                >
                    Player A: <br><span class="playerpoint">{{ point.A }}</span>
                </v-card>
            </v-col>
            <v-col>
                <v-card
                    class="pa-2"
                    :class="{ active: !isPlayerA }"
                >
                    Player B: <br><span class="playerpoint">{{ point.B }}</span>
                </v-card>
            </v-col>
        </v-row>
        <div class="card bg-white my-2 p-3">
            <p>cards in stack: {{ pile }}</p>
            <p>you are player: {{ player }}</p>
            <PlayerChooser/>
        </div>
         <VButtons/>
    </v-card>
    </v-container>
</template>

<script>
import PlayerChooser from "./v-player-chooser.vue";
import VButtons from "../components/v-buttons.vue";

export default {
    name: "Info",
    components: {
        PlayerChooser,
        VButtons,
    },
    methods: {},
    computed: {
        isPlayerA() {
            return this.$store.state.turn === "A";
        },
        point() {
            return this.$store.state.point
        },
        pile() {
            return this.$store.state.pile
        },
        player() {
            return this.$store.state.player
        }
    },
};
</script>

<style scoped>
.active {
    color: red;
}
.playerpoint {
    font-size: 3em;
    font-weight: bold;
}
</style>
