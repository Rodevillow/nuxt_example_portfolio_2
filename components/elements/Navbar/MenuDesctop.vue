<template>
  <div class="desctop-menu">
    <Menu />
  </div>
</template>

<script>
import Menu from "@/components/elements/Navbar/Menu";

export default {
  name: "MenuDesctop",
  components: {
    Menu
  }
};
</script>

<style lang="scss" scoped>
.desctop-menu {
  display: none;
}

@include media-breakpoint-up(lg) {
  .desctop-menu {
    display: block;
  }
}
</style>
