import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/makanan",
    name: "makanan",
    component: () => import("../views/Makanan.vue")
  },
  {
    path: "/karyawan",
    name: "karyawan",
    component: () => import("../views/Karyawan.vue")
  },
  {
    path: "/minuman",
    name: "minuman",
    component: () => import("../views/Minuman.vue")
  },
  {
    path: "/user/login",
    name: "loginuser",
    component: () => import("../views/user/LoginUser.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue")
  },
  {
    path: "/admin/",
    name: "admin",
    component: () => import("../views/admin/HalamanAdmin.vue")
  },
  {
    path: "/admin/login",
    name: "adminlogin",
    component: () => import("../views/admin/LoginAdmin.vue")
  },
  {
    path: "/user/chef",
    name: "chef",
    component: () => import("../views/user/Chef.vue")
  },
  {
    path: "/user/Cashier",
    name: "cashier",
    component: () => import("../views/user/Cashier.vue")
  },
  {
    path: "/user/waitress",
    name: "waitress",
    component: () => import("../views/user/Waitress.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
