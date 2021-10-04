<template>
  <h1><slot /></h1>
</template>

<script>
export default {
  name: "H1"
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Arial";
  font-weight: bold;
  font-size: 35px;
  line-height: 50px;
}
</style>
