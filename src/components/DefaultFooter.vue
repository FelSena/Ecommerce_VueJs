<template>
  <div class="footer">
    <span> Desenvolvido por:</span>
    <a href="https://www.linkedin.com/in/felipeasena/">Felipe Sena</a>
  </div>
</template>

<script>
export default {
  name: "DefaultFooter",
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 48px;
  border-top: solid rgb(206, 206, 206) 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
a {
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
}
</style>
