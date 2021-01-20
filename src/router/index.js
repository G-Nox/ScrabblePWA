import VueRouter from "vue-router";
import Home from "../views/LandingPage.vue";
import Scrabble from "../views/ScrabblePage.vue";
import NotFound from "../views/Offline.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Scrabble",
    name: "Scrabble",
    component: Scrabble
  },
  {
    path: "*",
    name: "Offline",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
