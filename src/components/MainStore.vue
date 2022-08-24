<template>
  <div class="store">
    <div v-for="movie in movieList" :key="movie.id" class="product">
      <div
        class="imgBox"
        :style="{
          backgroundImage: 'url(' + imgBaseURL + movie.poster_path + ')',
        }"
      >
        <img src="@/assets/heart-solid.svg" alt="Icone Coracao" class="heart" />
        <!-- <img :src="imgBaseURL + movie.poster_path" alt="" class="banner" /> -->
        <span class="release"
          >Lançamento:
          {{ movie.release_date.split("-").reverse().join("/") }}</span
        >
      </div>
      <div class="movieInformations">
        <h2>{{ movie.title }}</h2>
        <div class="rating">
          <img
            src="@/assets/star-solid.svg"
            alt="Icone de estrela"
            class="star"
          />
          <span>{{ movie.vote_average }}</span>
        </div>
        <span>R${{ movie.popularity.toFixed(2) }}</span>
      </div>
      <button @click="addCart(movie)">Adicionar</button>
    </div>
  </div>
</template>

<script>
import API from "@/api/api";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  name: "MainStore",

  data() {
    return {
      movieList: [],
      imgBaseURL: "https://image.tmdb.org/t/p/w500",
    };
  },
  setup() {
    const store = useStore();
    const cart = computed(() => store.state.cart.itens);
    return {
      cart,
    };
  },
  methods: {
    async apiGet() {
      await API.get()
        .then((res) => (this.movieList = res.data.results))
        .catch((err) => err);
    },
    addCart(movie) {
      this.cart.push(movie);
      console.log(this.cart);
    },
  },
  mounted() {
    this.apiGet();
  },
};
</script>

<style scoped>
.store {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 30px;
  box-sizing: border-box;
  overflow-y: scroll;
}
.product {
  width: 150px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: #7f7f7f solid 1px;
  border-radius: 2px;
}
.heart {
  width: 20px;
  position: relative;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
.star {
  width: 16px;
}
.imgBox {
  width: 150px;
  height: 225px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
.release {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  font-weight: 600;
}
.movieInformations {
  padding: 0 2.5px;
  box-sizing: border-box;
  font-weight: 500;
}
.rating {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  margin-bottom: 5px;
}

h2 {
  font-size: 16px;
  font-weight: 700;
}
button {
  width: 100%;
  height: 36px;
  border: none;
  border-radius: 2px;
  background-color: #5344f5;
  color: rgb(255, 255, 255);
  font-weight: 500;
  cursor: pointer;
}
</style>
