import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Chatroom from "../views/Chatroom.vue";
import { projectAuth } from "../firebase/config";

// route guard basically let people in based on truthiness of user
// or if user is logged in
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next();
  } else {
    next({ name: "Welcome" });
  }
};

//route guard for logged in user so they cannot see welcome page
const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next();
  } else {
    next({ name: "Chatroom" });
  }
};

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    // the route guard that prevent people who are not user to go into chatroom
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
