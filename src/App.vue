<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  font-family: "Montserrat";
  text-align: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}
</style>
