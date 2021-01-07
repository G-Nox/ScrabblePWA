<template>
    <v-container v-if="show" class="my-2">
        <v-row>
            <v-col class="pa-0">
                <v-select
                    v-model="select"
                    :items="sizes"
                    item-text="name"
                    item-value="val"
                    label="Resize"
                    solo
                    hide-details
                    prepend-icon="mdi-grid">
                </v-select>
                <div @click="newgame">
                    <vHoverButton name="new game" icon="mdi-plus-box"/>
                </div>
                <div  @click="undo">
                    <vHoverButton name="undo" icon="mdi-arrow-left-bold-box"/>
                </div>
                <div @click="redo">
                    <vHoverButton name="redo" icon="mdi-arrow-right-bold-box"/>
                </div>
                <div @click="switch_card">
                    <vHoverButton name="switch cards" icon="mdi-reload"/>
                </div>
                <div @click="submit">
                    <vHoverButton name="submit" icon="mdi-checkbox-marked"/>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import vHoverButton from "./v-hover-button"
export default {
    name: "Buttons",
    components: {
        vHoverButton
    },
    data() {
        return {
            select: {},
            sizes: [
                {name: '3x3', val:'3'},
                {name: '9x9', val:'9'},
                {name: '15x15', val:'15'},
            ]
        }
    },
    watch: {
        select: function (newSize) {
            this.resize(newSize)
        }
    },
    computed: {
        player() {
            return this.$store.state.player
        },
        show() {
            return this.$store.state.turn === this.player
        }
    },
    methods: {
        newgame() {
            this.$store.dispatch("sendCommand", "new")
        },
        resize(size) {
            this.$store.dispatch("sendCommand", "resize/"+size)
        },
        undo() {
            this.$store.dispatch("sendCommand", "undo")
        },
        redo() {
            this.$store.dispatch("sendCommand", "redo")
        },
        switch_card() {
            this.$store.dispatch("sendCommand", "switch/"+this.player)
        },
        submit() {
            this.$store.dispatch("sendCommand", "submit")
        },
    },
};
</script>

<style scoped>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}
.v-btn{
    justify-content: left;
}
</style>
