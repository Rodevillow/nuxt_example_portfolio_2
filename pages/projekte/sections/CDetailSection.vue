<template>
  <div class="c-detail">
    <div class="c-detail__top row">
      <div class="col-md-6">
        <H2 class="c-detail__title">{{ cDetailData.title }}</H2>
        <Paragraph
          class="c-detail__description"
          :html="cDetailData.description"
        />
      </div>
      <div class="col-md-6 d-flex align-items-center">
        <Img
          :imageUrl="cDetailData.right_image.url"
          :imageHeight="cDetailData.right_image.height"
          :imageWidth="cDetailData.right_image.width"
        />
      </div>
    </div>
    <div class="c-detail__bottom row">
      <div class="col-md-6">
        <Img
          :imageUrl="cDetailData.images[0].image.url"
          :imageHeight="cDetailData.images[0].image.height"
          :imageWidth="cDetailData.images[0].image.width"
        />
      </div>
      <div class="col-md-6">
        <Img
          :imageUrl="cDetailData.images[1].image.url"
          :imageHeight="cDetailData.images[1].image.height"
          :imageWidth="cDetailData.images[1].image.width"
        />
      </div>
      <div class="col-md-12 c-detail__bottom__big-image">
        <Img
          :imageUrl="cDetailData.images[2].image.url"
          :imageHeight="cDetailData.images[2].image.height"
          :imageWidth="cDetailData.images[2].image.width"
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
  name: "CDetailSection",
  props: {
    cDetailData: {
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
.c-detail {
  &__title {
    margin-bottom: 30px;
  }
  &__bottom {
    margin-bottom: 30px;

    &__big-image {
      margin-top: 30px;
    }
  }
}
</style>
