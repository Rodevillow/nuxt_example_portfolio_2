<template>
  <div class="a-detail">
    <div class="row a-detail__top">
      <div
        class="col-md-6"
        v-for="(image, key) in aDetailData.images"
        :key="key"
      >
        <Img
          :imageUrl="image.image.url"
          :imageHeight="image.image.height"
          :imageWidth="image.image.width"
        />
      </div>
    </div>
    <div class="row a-detail__bottom">
      <div class="col-md-6 d-flex align-items-center">
        <Img
          :imageUrl="aDetailData.left_image.url"
          :imageHeight="aDetailData.left_image.height"
          :imageWidth="aDetailData.left_image.width"
        />
      </div>
      <div class="col-md-6">
        <H2 class="a-detail__title">{{ aDetailData.title }}</H2>
        <Paragraph
          class="a-detail__description"
          :html="aDetailData.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import H2 from "@/components/ui/text/H2";
import Paragraph from "@/components/ui/text/Paragraph";
import Img from "@/components/ui/elements/Img";

export default {
  name: "ADetailSection",
  props: {
    aDetailData: {
      type: Object,
      require: true
    }
  },
  components: {
    H2,
    Paragraph,
    Img
  }
};
</script>

<style lang="scss" scoped>
.a-detail {
  &__bottom {
    padding-top: 40px;
  }
  &__title {
    margin-bottom: 30px;
  }
}
</style>
