<template>
    <v-card class="myGrid mb-2">
        <div class="myRow">
            <div class="myCell myLabel"></div>
            <div v-for="n in size" class="myCell myLabel" :key="n">
                {{ n }}
            </div>
        </div>
        <div v-for="(n, i) in size" class="myRow" :key="n">
            <div class="myCell myLabel">{{ n }}</div>
            <div v-for="(m, index) in cells[i]" :key="index">
                <div v-if="m.value" class="myCell myCard" @click="clickCell($event, i, index)">
                    <div class="myCharacter">{{ m.value }}</div>
                    <div class="myPoint">{{ point(m.value) }}</div>
                </div>
                <div v-else>
                    <div v-if="m.kind === 'n'" class="myCell normal" @click="clickCell($event, i, index)">
                        {{ m.value }}
                    </div>
                    <div v-if="m.kind === 'd'" class="myCell double" @click="clickCell($event, i, index)">
                        {{ m.value }}
                    </div>
                    <div v-if="m.kind === 't'" class="myCell triple" @click="clickCell($event, i, index)">
                        {{ m.value }}
                    </div>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script>

import $ from "jquery";

export default {
    name: "Grid",
    computed: {
        size() {
            return this.$store.state.size
        },
        cells() {
            return this.$store.state.cells
        },
    },
    methods: {
        point(card) {
            return this.$store.getters.getPoint(card)
        },
        clickCell: function(ev, x, y) {
          if (!ev.currentTarget.classList.contains("activeDiv")) {
              $(".myCell").removeClass("activeDiv")
              ev.currentTarget.classList.add("activeDiv")
          } else {
              let active = this.isActive($(".inHand"))
              if (active[0]) {
                  console.log('set/'+x+'/'+y+'/'+active[1])
                  this.$store.state.socket.send('set/'+x+'/'+y+'/'+active[1])
              } else {
                  alert("No card was selected")
              }
          }
        },
        isActive(array) {
            for (var i = 0; i < array.length; i++) {
                let element = array[i]
                if (element.classList.contains("activeDiv")) {
                    return [true, i]
                }
            }
            return false
        }
    },
};
</script>

<style scoped>
    .double {
        background-color: #ffe252;
    }

    .triple {
        background-color: #f85c5c;
    }
</style>
