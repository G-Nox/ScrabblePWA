<template>
    <v-hover v-slot="{ hover }">
        <v-btn
            elevation="2"
            rounded
            block
            large
            class="d-flex pa-4 my-2"
        >
            <v-icon class="text-left">
                {{ icon }}
            </v-icon>
            <v-expand-x-transition>
                <div
                    v-if="hover"
                    class="darken-3 black--text font-weight-bold"
                >
                    {{ name }}
                </div>
            </v-expand-x-transition>
        </v-btn>
    </v-hover>
</template>

<script>
export default {
    name: "v-hover-button",
    props: {
        name: {type: String, required: true},
        icon: {type: String, required: true},
    }
}
</script>

<style scoped>

</style>