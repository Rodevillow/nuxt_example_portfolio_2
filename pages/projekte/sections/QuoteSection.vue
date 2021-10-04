<template>
  <div class="quote-section">
    <SeparatorLine />
    <div class="quote-section__text">{{ quoteData.text }}</div>
    <SeparatorLine />
  </div>
</template>

<script>
import SeparatorLine from "@/components/ui/elements/SeparatorLine";

export default {
  name: "QuoteSection",
  props: {
    quoteData: {
      type: Object,
      require: true
    }
  },
  components: {
    SeparatorLine
  }
};
</script>

<style lang="scss" scoped>
.quote-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__text {
    font-family: "Arial";
    font-weight: bold;
    font-size: 35px;
    line-height: 50px;
    text-align: center;
    max-width: 774px;
    width: 100%;
    padding: 10px;
  }
}
</style>
