<template>
  <div>
    <p class="paragraph" :class="{ 'is-bold': isBold }" v-if="!html">
      <slot />
    </p>
    <div
      class="paragraph"
      :class="{ 'is-bold': isBold }"
      v-if="html"
      v-html="html"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Paragraph",
  props: {
    html: {
      type: String | Boolean,
      default: null
    },
    isBold: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.paragraph {
  font-family: "Arial";
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: $textColor;
  margin: 0;

  &.is-bold {
    font-weight: bold;
  }
}
</style>
