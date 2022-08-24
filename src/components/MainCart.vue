<template>
  <div class="cart">
    <div v-if="cart.length === 0" class="emptyCart">
      <h3>O Carrinho está vázio</h3>
      <span>Adicione itens</span>
    </div>
    <div class="itemList">
      <div v-for="(item, index) in cart" :key="item.id" class="cartItem">
        <div
          class="imgBox"
          :style="{
            backgroundImage:
              'url(' +
              'https://image.tmdb.org/t/p/w500' +
              item.poster_path +
              ')',
          }"
        ></div>
        <span>{{ item.title }}</span>
        <button @click="removeItem(index)"></button>
      </div>
    </div>
    <div class="priceBox" v-if="type === 'checkout'">
      <div class="totalPrice">
        <span>TOTAL:</span>
        <span>R${{ total.toFixed(2) }}</span>
      </div>
    </div>

    <div class="priceBox" v-else>
      <div class="totalPrice">
        <span>TOTAL:</span>
        <span>R${{ total.toFixed(2) }}</span>
      </div>
      <router-link to="/payment"
        ><button class="process">Finalizar Compra</button></router-link
      >
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  name: "MainCart",
  setup() {
    const store = useStore();
    const cart = computed(() => store.state.cart.itens);
    const total = computed(() =>
      store.state.cart.itens.reduce((acc, item) => acc + item.popularity, 0)
    );
    console.log(cart);
    return {
      cart,
      total,
    };
  },
  props: ["type"],
  methods: {
    removeItem(index) {
      this.cart.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.cart {
  width: 350px;
  height: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.emptyCart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.imgBox {
  width: 45px;
  height: 60px;
  background-size: cover;
}
.itemList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
}

.cartItem {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.cartItem span {
  font-size: 14px;
  font-weight: 600;
}
.cartItem button {
  cursor: pointer;
  width: 20px;
  height: 30px;
  background-color: transparent;
  border: none;
  background-image: url(../assets/trash-solid.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.priceBox {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  font-size: 20px;
  font-weight: 500;
}
.totalPrice {
  width: 90%;
  display: flex;
  justify-content: space-between;
}
.process {
  width: 90%;
  height: 36px;
  background-color: #5344f5;
  border: none;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
</style>
