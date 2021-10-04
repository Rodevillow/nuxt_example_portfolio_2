<template>
  <input
    class="input-default"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    :name="name"
    @input="handleInput"
    @blur="handleOnBlur"
    :disabled="disabled"
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    handleOnBlur() {
      this.$emit("blur");
    }
  }
};
</script>

<style lang="scss" scoped>
.input-default {
  height: 50px;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid $borderColor;
  border-radius: 0;
  outline: none;

  &:disabled {
    background-color: transparent;
    border-color: $disabled;
    color: $disabled;
  }

  &:focus {
    box-shadow: none;
    border-width: 2px;
  }

  &--error {
    border-bottom: 1px solid $error;
  }

  &--warning {
    border-bottom: 1px solid $warning;
  }

  &--success {
    border-bottom: 1px solid $success;
  }
}
</style>
