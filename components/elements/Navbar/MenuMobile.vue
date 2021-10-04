<template>
  <div class="mobile-menu">
    <Burger @menuIsOpen="toogleMenu" :mobileMenuIsOpen="mobileMenuIsOpen" />
    <div class="mobile-menu__items" :class="{ 'is-open': mobileMenuIsOpen }">
      <Menu @click.native="closeMenuMobile" />
    </div>
  </div>
</template>

<script>
import Burger from "@/components/ui/icons/Burger";
import Menu from "@/components/elements/Navbar/Menu";

export default {
  name: "MenuMobile",
  data() {
    return {
      mobileMenuIsOpen: false
    };
  },
  components: {
    Burger,
    Menu
  },
  mounted() {
    this.$nuxt.$on("close-mobile-menu", () => {
      this.mobileMenuIsOpen = false;
    });
  },
  methods: {
    toogleMenu(menuIsOpen) {
      this.mobileMenuIsOpen = menuIsOpen;
    },
    closeMenuMobile() {
      this.mobileMenuIsOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  &__items {
    opacity: 0;
    transition: 0.3s;
    position: absolute;
    left: 0;
    top: 100px;
    background-color: white;
    width: 100%;
    height: calc(100vh - 100px);
    visibility: hidden;

    &.is-open {
      opacity: 1;
      transition: 0.3s;
      visibility: visible;
    }
  }
}

@include media-breakpoint-up(lg) {
  .mobile-menu {
    display: none;
  }
}
</style>
