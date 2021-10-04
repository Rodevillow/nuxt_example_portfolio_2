<template>
  <nav class="h-100 d-flex justify-content-between align-items-center">
    <NuxtLink to="/">
      <Logo @click.native="emitEventCloseMobileMenu" />
    </NuxtLink>
    <MenuMobile />
    <MenuDesctop />
  </nav>
</template>

<script>
import Logo from "@/components/ui/icons/Logo";
import Navbar from "@/components/elements/Navbar";
import MenuMobile from "@/components/elements/Navbar/MenuMobile";
import MenuDesctop from "@/components/elements/Navbar/MenuDesctop";

export default {
  name: "Navbar",
  components: {
    Logo,
    Navbar,
    MenuMobile,
    MenuDesctop
  },
  methods: {
    emitEventCloseMobileMenu() {
      this.$nuxt.$emit("close-mobile-menu");
    }
  }
};
</script>
