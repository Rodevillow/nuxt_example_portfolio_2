<template>
  <button
    :disabled="disabled"
    :type="type"
    class="btn btn-default"
    @click="clickButton"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonDefault",
  props: {
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickButton(event) {
      this.$emit("click", event);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-default {
  background-color: $btnDefault;
  color: $light;
  outline: none;
  box-shadow: none;

  border-radius: $borderRadius;
  border: none;

  height: 39px;

  &:hover {
    background-color: $btnHover;
  }
}
</style>
