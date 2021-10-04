<template>
  <Container class="default-layout">
    <Header />
    <Nuxt class="page" />
    <Footer />
  </Container>
</template>

<script>
import Container from "@/components/helpers/Container";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  name: "Default",
  components: {
    Container,
    Header,
    Footer
  }
};
</script>

<style lang="scss" scope>
.default-layout {
  padding-top: 100px;

  .page {
    min-height: calc(100vh - #{$headerHeight} - #{$footerMobileHeight});
    height: 100%;
    padding: 0 15px;
  }
}

@include media-breakpoint-up(lg) {
  .default-layout {
    .page {
      min-height: calc(100vh - #{$headerHeight} - #{$footerHeight});
    }
  }
}
</style>
