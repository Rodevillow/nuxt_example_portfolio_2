<template>
  <header class="header fixed-top">
    <Container class="header-container">
      <Navbar />
    </Container>
  </header>
</template>

<script>
import Container from "@/components/helpers/Container";
import Navbar from "@/components/elements/Navbar";

export default {
  name: "Header",
  components: {
    Container,
    Navbar
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: $themeBg;
  width: 100%;
  z-index: 9;

  &-container {
    height: 100px;
    width: 100%;
    border-bottom: 1px solid $borderColor;
    padding: 0 15px;
  }
}
</style>
