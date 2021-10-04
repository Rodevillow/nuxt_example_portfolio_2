<template>
  <div class="home d-flex justify-content-center align-items-center">
    <div class="home-container w-100">
      <Slider :sliderData="this.sections.slider" />
    </div>
  </div>
</template>

<script>
import Slider from "@/components/elements/Slider";
import { ENDPOINT_HOME_PAGE } from "@/api/constants.endpoints";

export default {
  name: "Home",
  components: { Slider },
  head() {
    return {
      title: this.head.title,
      meta: this.head.meta
    };
  },
  async asyncData({ $apiService }) {
    const info = await $apiService.get(ENDPOINT_HOME_PAGE);

    return {
      head: {
        title: info.data.yoast_title,
        meta: info.data.yoast_meta
      },
      sections: {
        slider: info.data.acf.section_slider.sliders
      }
    };
  }
};
</script>

<style lang="scss" scope>
.default-layout {
  & .home {
    padding: 0;
  }
}
</style>
