import { createStore } from "vuex";

const store = createStore({
  state: {
    cart: {
      itens: [],
    },
  },
});

export default store;
