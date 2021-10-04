<template>
  <div class="newsletter">
    <FormSection :formData="this.sections.form" />
  </div>
</template>

<script>
import { ENDPOINT_NEWSLETTER_PAGE } from "@/api/constants.endpoints";
import FormSection from "@/pages/newsletter/sections/FormSection";

export default {
  name: "Newsletter",
  components: {
    FormSection
  },
  async asyncData({ $apiService }) {
    const info = await $apiService.get(ENDPOINT_NEWSLETTER_PAGE);

    return {
      head: {
        title: info.data.yoast_title,
        meta: info.data.yoast_meta
      },
      sections: {
        form: info.data.acf.section_content
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.newsletter {
  padding-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
