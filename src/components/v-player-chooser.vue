<template>
    <v-card>
        <v-select
            v-model="player"
            :items="items"
            solo
            hide-details
            label="Please select a player">
        </v-select>
    </v-card>
</template>

<script>

export default {
    name: "PlayerChooser",
    data: () => ({
        items: ['A', 'B'],
    }),
    computed: {
        player: {
            get() {
                return this.$store.state.player
            },
            set(value) {
                this.$store.commit("setPlayer", value)
            },
        }
    },
};
</script>

<style scoped></style>
