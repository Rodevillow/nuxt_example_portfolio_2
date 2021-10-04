<template>
  <div class="error d-flex justify-content-center align-items-center">
    <div
      class="error-content d-flex justify-content-center align-items-center flex-column"
    >
      <H1>404</H1>
      <Paragraph>Oops, page was not found! =(</Paragraph>
      <NuxtLink class="error-content__link" to="/">Go to Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
import H1 from "@/components/ui/text/H1";
import Paragraph from "@/components/ui/text/Paragraph";

export default {
  name: "Error",
  components: {
    H1,
    Paragraph
  }
};
</script>

<style lang="scss" scoped>
.error {
  &-content {
    &__link {
      margin-top: 30px;
      color: $textColor;
      font-family: "Arial";
      font-weight: bold;
    }
  }
}
</style>
