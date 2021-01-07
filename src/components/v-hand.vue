<template>
    <div v-if="showHand">
        <div v-if="player === 'A'" class="myHand my-2">
            <div
                v-for="(card, index) in hand.A"
                class="myCard inHand"
                @click="chooseCard"
                :key="index"
            >
                <div class="myCharacter">{{ card.value }}</div>
<!--                <div class="myPoint">{{ point(card.value) }}</div>-->
            </div>
        </div>
        <div v-if="player === 'B'" class="myHand my-2">
            <div
                v-for="(card, index) in hand.B"
                class="myCard inHand"
                @click="chooseCard"
                :key="index"
            >
                <div class="myCharacter">{{ card.value }}</div>
<!--                <div class="myPoint">{{ point(card.value) }}</div>-->
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";

export default {
    name: "Hand",
    computed: {
        player() {
            return this.$store.state.player
        },
        hand() {
            console.log(this.$store.state.hand)
            return this.$store.state.hand
        },
        point(card) {
            return this.$store.getters.getPoint(card)
        },
        showHand() {
            return this.$store.state.turn === this.player
        }
    },
    methods: {
        chooseCard: function(ev) {
            $(".inHand").removeClass("activeDiv")
            ev.currentTarget.classList.add("activeDiv")
        },
    },
};
</script>

<style scoped></style>
