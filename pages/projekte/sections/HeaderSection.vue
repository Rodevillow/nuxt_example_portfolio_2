<template>
  <div class="header">
    <div class="row">
      <div class="col-md-6">
        <Img
          :imageUrl="headerData.image_left.url"
          :imageHeight="headerData.image_left.height"
          :imageWidth="headerData.image_left.width"
        />
      </div>
      <div class="col-md-6">
        <H1>{{ headerData.headline }}</H1>
        <ul class="list-unstyled header__list">
          <li v-for="(item, key) in headerData.info" :key="key">
            {{ item.label }}: {{ item.description }}
          </li>
        </ul>
        <a :href="headerData.vr_link.link" class="header__vr-link">
          {{ headerData.vr_link.label }}
        </a>
      </div>
    </div>
    <HR />
  </div>
</template>

<script>
import H1 from "@/components/ui/text/H1";
import SeparatorLine from "@/components/ui/elements/SeparatorLine";
import Img from "@/components/ui/elements/Img";

export default {
  name: "HeaderSection",
  props: {
    headerData: {
      type: Object
    }
  },
  components: {
    H1,
    SeparatorLine,
    Img
  }
};
</script>

<style lang="scss" scoped>
.header {
  &__list {
    color: $textColor;
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
  }

  &__vr-link {
    color: $textDarkColor;
    font-family: "Arial";
    font-weight: bold;
    font-size: 30px;
    line-height: 50px;
    position: absolute;
    right: 15px;
    bottom: 15px;
  }
}
</style>
