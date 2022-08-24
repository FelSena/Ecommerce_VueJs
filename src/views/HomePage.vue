<template>
  <header class="header">
    <h2 class="Logo">LOGO</h2>
    <div>
      <input type="text" placeholder="Pesquisar" />
    </div>
    <div class="userBox">
      <div class="cartBox">
        <img
          src="@/assets/heart-solid.svg"
          alt="icone coracao"
          class="heartIcon"
        />
      </div>
      <div class="cartBox">
        <img
          @click="handlerCart"
          src="@/assets/cart-shopping-solid.svg"
          alt="icone carrinho"
          class="cartIcon"
        />
        <div :class="{ cartLength }">{{ cartLength }}</div>
      </div>
    </div>
  </header>
  <main class="mainStore">
    <MainStore />
    <div class="hidden" :class="{ active }">
      <MainCart />
    </div>
  </main>
  <footer>
    <DefaultFooter />
  </footer>
  <!-- <button @click="handlerCart">ADD</button> -->
</template>

<script>
//import API from "./api/api";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import MainCart from "../components/MainCart.vue";
import MainStore from "../components/MainStore.vue";
import DefaultFooter from "../components/DefaultFooter.vue";

export default {
  name: "HomePage",
  components: { MainCart, MainStore, DefaultFooter },
  data() {
    return {
      active: false,
    };
  },
  setup() {
    const store = useStore();
    const cart = computed(() => store.state.cart.itens);
    const cartLength = computed(() =>
      store.state.cart.itens.length > 0 ? store.state.cart.itens.length : ""
    );

    return {
      cart,
      cartLength,
    };
  },
  methods: {
    addCart() {
      this.cart.push("teste");
    },
    handlerCart() {
      this.active = !this.active;
    },
  },
};
</script>

<style>
.header {
  min-height: 52px;
  background-color: #8dd7cf;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  box-sizing: border-box;
}
.header input {
  width: 300px;
  height: 32px;
  border: none;
  border-radius: 4px;
}
.userBox {
  display: flex;
  gap: 55px;
}
.heartIcon {
  width: 32px;
  position: absolute;
  right: 70px;
  cursor: pointer;
}
.cartIcon {
  width: 32px;
  position: absolute;
  right: 15px;
  cursor: pointer;
}
.cartBox {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cartLength {
  width: 16px;
  height: 16px;
  background-color: blue;
  position: relative;
  right: 20px;
  bottom: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
}
.hidden {
  display: none;
}
.active {
  display: flex;
}
.mainStore {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
}
.logo {
  font-size: 25px;
  font-weight: 900;
  background-color: #fff;
}
</style>
