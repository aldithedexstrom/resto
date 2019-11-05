import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  state: {
    cart: [],
    cartCount: 0
  },

  mutations: {
    addToCart(state, item) {
      console.log(item.title);
    }
  }
};
