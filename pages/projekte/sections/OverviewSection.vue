<template>
  <div class="overview">
    <div class="row overview__content">
      <div class="col-sm-6 h-100">
        <Img
          v-for="(image, key) in overviewData.left_images"
          class="overview__content__image"
          :imageUrl="image.image.url"
          :imageHeight="image.image.height"
          :imageWidth="image.image.width"
          :key="key"
        />
      </div>
      <div
        class="col-sm-6 d-flex justify-content-center aligh-items-center flex-column"
      >
        <H2 class="overview__content__title">{{ overviewData.title }}</H2>
        <Paragraph
          class="overview__content__description"
          :html="overviewData.description"
        />
      </div>
    </div>
    <div class="overview__content__image">
      <Img :imageUrl="overviewData.image.url" />
    </div>
  </div>
</template>

<script>
import H2 from "@/components/ui/text/H2";
import Paragraph from "@/components/ui/text/Paragraph";
import Img from "@/components/ui/elements/Img";

export default {
  name: "OverviewSection",
  props: {
    overviewData: {
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
.overview {
  &__content {
    margin-top: 30px;
    margin-bottom: 30px;

    &__title {
      margin-bottom: 30px;
    }
    // &__description {
    // }
    //
    // &__image {
    // }
  }
}
</style>
