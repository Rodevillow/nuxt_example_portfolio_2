<template>
  <ul class="menu">
    <NuxtLink
      :class="{ active: $nuxt.$route.path == link.url }"
      v-for="(link, key) in this.$store.state.navigationMenu"
      tag="li"
      :to="link.url"
      :key="key"
      >{{ link.name }}</NuxtLink
    >
  </ul>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;

  li {
    margin-left: 0;
    margin-top: 20px;
    text-transform: lowercase;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &.active {
      text-decoration: underline;
    }
  }
}

@include media-breakpoint-up(lg) {
  .menu {
    display: flex;
    flex-direction: row;
    height: auto;
    margin: 0;
    list-style: none;

    li {
      margin-left: 50px;
      margin-top: 0;
      text-transform: lowercase;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
