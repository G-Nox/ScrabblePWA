<template>
    <v-container>
        <v-row class="my-5">
            <v-img
                alt="math scrabble"
                max-height="300"
                src="../assets/MathScrabble.jpg"
            />
        </v-row>
        <v-row>
            <v-col class="d-flex flex-column align-stretch">
                <v-card
                    elevation="3"
                    class="pa-4 mb-2"
                >
                    <h1 class="mb-2">MATH SCRABBLE</h1>
                    "Math Scrabble" (or "Number Scrabble") is a game based on normal
                    Scrabble, but you make equations instead of words.
                    The letter tiles used in Scrabble are replaced with numbers and
                    operators.
                    You can use a standard scrabble set to play number scrabble by writing
                    the proper numbers and operators on the back of the standard scrabble
                    tiles.
                </v-card>
                <v-card
                    elevation="3"
                    class="pa-4 mt-2 flex-grow-1"
                >
                    <h2 class="mb-2">The Rules</h2>
                    <ul>
                        <li>Except as noted, game play is similar to normal Scrabble</li>
                        <li>
                            On each turn, players must make or add to a valid and correct
                            equation.
                        </li>
                        <ul type="circle">
                            <li>example: '3+3=6'</li>
                        </ul>
                        <li>
                            Players keep <strong>9 tiles</strong> in their hand at all times,
                            not 7 as in normal Scrabble
                        </li>

                        <li>
                            You can add to an existing equation on one side or both sides in a
                            single turn.
                        </li>
                        <ul type="circle">
                            <li>
                                example: you can add to both ends of '3+3=6' in a single turn to
                                make '63+3=66'
                            </li>
                        </ul>

                        <li>You may only use one new '=' sign per turn</li>
                        <li>Equations can have multiple equal parts.</li>
                        <ul type="circle">
                            <li>example: '2x2=1+3=4=5-1'</li>
                        </ul>
                        <li>Redundant equations are valid</li>
                        <ul type="circle">
                            <li>example: '1-1+1-1=0=0+0'</li>
                        </ul>
                        <li>
                            The '-' may be used either as an operator or before a number
                            indicate its sign.
                        </li>
                        <ul type="circle">
                            <li>example: '-3=5-8'</li>
                            <li>example: '3=-5--8'</li>
                        </ul>
                        <li>
                            You may not use leading '+' signs or leading '0' in front of a
                            number
                        </li>
                        <li>
                            In normal scrabble, you can place one word alongside another if they
                            create a valid cross-word <br/>
                            Here, a 2-character sequence can never be an equation so this
                            generally is not possible.
                        </li>
                    </ul>
                </v-card>
            </v-col>
            <v-col>
                <v-card
                    elevation="3"
                    class="pa-4 mx-auto"
                >
                    <h2 class="my-2">Score</h2>
                    <v-data-table
                        :headers="headers"
                        :items="points"
                        :items-per-page="15"
                        hide-default-footer
                    ></v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "LandingPage",
    data() {
        return {
            headers: [
                {
                    text: 'Number/Operator',
                    align: 'start',
                    value: 'card',
                },
                {
                    text: 'Score value',
                    value: 'point',
                }
            ]
        };
    },
    computed: {
        points() {
            return this.$store.state.card_point
        }
    }
};
</script>

<style scoped>
</style>
