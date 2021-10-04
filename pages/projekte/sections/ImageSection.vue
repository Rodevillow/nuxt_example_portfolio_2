<template>
  <Img
    :imageUrl="imageData.image.url"
    :imageHeight="imageData.image.height"
    :imageWidth="imageData.image.width"
  />
</template>

<script>
import Img from "@/components/ui/elements/Img";

export default {
  name: "ImageSection",
  props: {
    imageData: {
      type: Object,
      require: true
    }
  },
  components: {
    Img
  }
};
</script>

<style lang="scss" scoped>
.image {
  margin-bottom: 30px;
}
</style>
