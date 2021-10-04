<template>
  <b-img-lazy :src="imageUrl" :width="imageWidth" :height="imageHeight" />
</template>

<script>
export default {
  name: "Img",
  props: {
    imageUrl: {
      type: String,
      require: true
    },
    imageHeight: {
      type: Number | String,
      default: null
    },
    imageWidth: {
      type: Number | String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped></style>
