<template>
  <div class="checkout">
    <div class="formBox">
      <form id="checkoutForm">
        <h2>Finalizar Compra</h2>
        <input
          type="text"
          placeholder="Nome Completo"
          class="defaultInput"
          required
          v-model="name"
        />
        <input
          type="text"
          placeholder="CPF"
          class="defaultInput"
          v-mask="['###.###.###-##']"
          required
        />
        <input
          type="text"
          placeholder="Celular"
          class="defaultInput"
          v-mask="['(##) ####-####', '(##) #####-####']"
          required
        />
        <input type="text" placeholder="E-mail" class="defaultInput" required />
        <input
          type="text"
          placeholder="Cep"
          class="defaultInput"
          v-mask="['##.###-###']"
          required
        />
        <input
          type="text"
          placeholder="Endereço"
          class="defaultInput"
          required
        />
        <input type="text" placeholder="Cidade" class="defaultInput" required />
        <input type="text" placeholder="Estado" class="defaultInput" required />
      </form>
    </div>
    <div class="itensBox">
      <MainCart type="checkout" />
      <button form="checkoutForm" @click="checkout">Finalizar</button>
    </div>
  </div>
  <div class="modalBox" :class="{ active }">
    <div class="modal">
      <h3>Obrigado {{ name }}!</h3>
      <span>Sua Compra foi finalizada com sucesso!</span>
      <router-link to="/"><button>Ir para Loja!</button></router-link>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import MainCart from "../components/MainCart.vue";
export default {
  name: "PaymentPage",
  data() {
    return {
      name: "",
      active: false,
    };
  },
  directives: {
    mask,
  },
  methods: {
    checkout() {
      if (this.name.length > 0) {
        event.preventDefault();
        this.active = !this.active;
      }
    },
  },
  components: { MainCart },
};
</script>

<style scoped>
.checkout {
  width: 100%;
  padding: 2% 10%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
}
.itensBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
input {
  width: 100%;
  height: 32px;
  border: solid 2px #aaaaaa;
  border-radius: 4px;
  padding: 0 4%;
}
button {
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
.modalBox {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;
}
.modal {
  width: 500px;
  height: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  box-sizing: border-box;
}
.active {
  display: flex;
}
</style>
