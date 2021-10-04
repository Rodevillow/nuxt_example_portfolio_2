<template>
  <button
    class="hamburger app"
    @click="toogleHamburger"
    :class="mobileMenuIsOpen ? 'hamburger--is-open' : 'xxx'"
  ></button>
</template>

<script>
export default {
  name: "Burger",
  props: {
    mobileMenuIsOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toogleHamburger() {
      this.$emit("menuIsOpen", !this.mobileMenuIsOpen);
    }
  }
};
</script>

<style lang="scss" scoped>
.hamburger {
  background-color: transparent;
  position: relative;
  display: flex;
  height: 80px;
  width: 80px;
  border: 0;
  cursor: pointer;
  pointer-events: all;
  outline: none;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 32px;
    left: 20px;
    background: $dark;
    width: 40px;
    height: 4px;
    transition: transform 300ms ease-out;
  }

  &:after {
    top: auto;
    bottom: 32px;
  }

  &--is-open {
    &:before {
      transform: translateY(6px) rotate(135deg);
    }
    &:after {
      transform: translateY(-6px) rotate(45deg);
    }
  }
}
</style>
