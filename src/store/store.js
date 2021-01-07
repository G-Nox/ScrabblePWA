import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let webSocket;

const store = new Vuex.Store({
    state: {
        socket: null,
        isConnected: false,
        size: 15,
        cells: [],
        turn: "",
        player: "",
        hand: {
            A: [],
            B: [],
        },
        point: {
            A: 0,
            B: 0,
        },
        pile: 10,
        card_point: [
            {"card": "=", "point": 1},
            {"card": "+", "point": 1},
            {"card": "-", "point": 1},
            {"card": "*", "point": 2},
            {"card": "/", "point": 3},
            {"card": "1", "point": 1},
            {"card": "2", "point": 1},
            {"card": "3", "point": 2},
            {"card": "4", "point": 2},
            {"card": "5", "point": 3},
            {"card": "6", "point": 2},
            {"card": "7", "point": 4},
            {"card": "8", "point": 2},
            {"card": "9", "point": 2},
            {"card": "0", "point": 1}
        ]
    },
    getters: {
         getPoint: (state) => (c) => {
             return state.card_point.filter(pair => pair["card"] === c)[0].point
         }
    },
    mutations: {
        connectToSocket (state, socket) {
            state.socket = socket
        },
        setGrid(state, cells) {
            state.size = cells.length
            state.cells = cells
        },
        setPlayer(state, player) {
            state.player = player
        },
        setHandAndPoint(state, playerList) {
            let playerA = playerList.A
            let playerB = playerList.B
            state.hand.A = playerA.hand
            state.hand.B = playerB.hand
            state.point.A = playerA.point
            state.point.B = playerB.point
        },
        setPile(state, pile){
            state.pile = pile.tilepile.length
        },
        setTurn(state, turn) {
            if (turn !== "pB") {
                state.turn = "A"
            } else {
                state.turn = "B"
            }
        },
        setIsConnected(state, bool) {
            state.isConnected = bool
        }
    },
    actions: {
        async connectWebsocket({ dispatch, commit }) {
            webSocket = new WebSocket('ws://localhost:9000/websocket')
            console.info('Connecting to WebSocket...')

            webSocket.onopen = () => {
                console.info('Connected to server: ' + webSocket.url)
                webSocket.send('connect')
                commit('setIsConnected', true);
            }

            webSocket.onmessage = message => dispatch('websocketOnMessage', message)

            webSocket.onerror = event => console.error(event)
            webSocket.onclose = () => {
                setTimeout(() => {
                    dispatch('connectWebsocket');
                    setTimeout( () => {
                        if (webSocket.readyState === WebSocket.CLOSED) {
                            commit('setIsConnected', false);
                        }
                    }, 500);
                }, 2000);
            }
            commit('connectToSocket', webSocket)
        },
        async websocketOnMessage({ commit }, message) {
            try {
                const res = JSON.parse(message.data)
                // console.log(res)
                switch(res.Event) {
                    case "InvalidEquation()":
                        alert("invalid equation")
                        commit('setGrid', res.gameField.grid.cells)
                        commit('setPile', res.gameField.pile)
                        commit('setHandAndPoint', res.gameField.playerList)
                        commit('setTurn', res.status)
                        break
                    case "GridSizeChanged()":
                        commit('setGrid', res.gameField.grid.cells)
                        commit('setPile', res.gameField.pile)
                        commit('setHandAndPoint', res.gameField.playerList)
                        commit('setTurn', res.status)
                        break
                    default:
                        commit('setGrid', res.gameField.grid.cells)
                        commit('setPile', res.gameField.pile)
                        commit('setHandAndPoint', res.gameField.playerList)
                        commit('setTurn', res.status)
                }
            } catch (e) {
                console.error(e)
            }
        },
        async sendCommand({ commit }, message) {
            commit("setIsConnected", true)
            this.state.socket.send(message)
        }
    },

});

export default store;