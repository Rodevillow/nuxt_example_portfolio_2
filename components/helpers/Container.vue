<template>
  <div class="theme-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container"
};
</script>

<style lang="scss" scoped>
.theme-container {
  max-width: 1141px;
  width: 100%;
  margin: 0 auto;
}
</style>
