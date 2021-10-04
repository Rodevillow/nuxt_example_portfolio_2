<template>
  <div class="b-detail">
    <div class="b-detail__top">
      <H2 class="b-bdetail__title">{{ bDetailData.title }}</H2>
      <Paragraph
        class="b-detail__description"
        :html="bDetailData.description"
      />
    </div>
    <div class="b-detail__bottom row">
      <div
        class="col-sm-6"
        v-for="(image, key) in bDetailData.images"
        :key="key"
      >
        <Img
          :imageUrl="image.image.url"
          :imageHeight="image.image.height"
          :imageWidth="image.image.width"
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
  name: "BDetailSection",
  props: {
    bDetailData: {
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
.b-detail {
  &__title {
    margin-bottom: 30px;
  }
  &__bottom {
    margin-top: 30px;
  }
}
</style>
