<template>
  <div class="d-detail">
    <div class="d-detail__top">
      <H2 class="d-detail__title">{{ dDetailData.title }}</H2>
      <Paragraph
        class="d-detail__description"
        :html="dDetailData.description"
      />
    </div>
    <div class="d-detail__bottom row">
      <div
        class="col-sm-6"
        v-for="(image, key) in dDetailData.images"
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
  name: "DDetailSection",
  props: {
    dDetailData: {
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
.d-detail {
  &__title {
    margin-bottom: 30px;
  }
  &__bottom {
    margin-top: 30px;
  }
}
</style>
