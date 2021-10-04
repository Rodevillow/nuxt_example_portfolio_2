<template>
  <div class="project">
    <HeaderSection
      :headerData="this.sections.header"
      v-if="this.sections.header.display"
    />
    <ImageSection
      :imageData="this.sections.image"
      v-if="this.sections.image.display"
    />
    <OverviewSection
      :overviewData="this.sections.overview"
      v-if="this.sections.overview.display"
    />
    <QuoteSection
      :quoteData="this.sections.quote"
      v-if="this.sections.quote.display"
    />
    <ADetailSection
      :aDetailData="this.sections.aDetail"
      v-if="this.sections.aDetail.display"
    />
    <BDetailSection
      :bDetailData="this.sections.bDetail"
      v-if="this.sections.bDetail.display"
    />
    <CDetailSection
      :cDetailData="this.sections.cDetail"
      v-if="this.sections.cDetail.display"
    />
    <DDetailSection
      :dDetailData="this.sections.dDetail"
      v-if="this.sections.dDetail.display"
    />
    <QuoteSection
      :quoteData="this.sections.quote2"
      v-if="this.sections.quote2.display"
    />
    <ImageSection
      :imageData="this.sections.image2"
      v-if="this.sections.image2.display"
    />
    <InfoSection
      :infoData="this.sections.info"
      v-if="this.sections.info.display"
    />
  </div>
</template>

<script>
import { ENDPOINT_PROJECTS } from "@/api/constants.endpoints";
import HeaderSection from "@/pages/projekte/sections/HeaderSection";
import ImageSection from "@/pages/projekte/sections/ImageSection";
import OverviewSection from "@/pages/projekte/sections/OverviewSection";
import QuoteSection from "@/pages/projekte/sections/QuoteSection";
import ADetailSection from "@/pages/projekte/sections/ADetailSection";
import BDetailSection from "@/pages/projekte/sections/BDetailSection";
import CDetailSection from "@/pages/projekte/sections/CDetailSection";
import DDetailSection from "@/pages/projekte/sections/DDetailSection";
import InfoSection from "@/pages/projekte/sections/InfoSection";

export default {
  name: "Project",
  components: {
    HeaderSection,
    ImageSection,
    OverviewSection,
    QuoteSection,
    ADetailSection,
    BDetailSection,
    CDetailSection,
    DDetailSection,
    InfoSection
  },
  head() {
    return {
      title: this.head.title,
      meta: this.head.meta
    };
  },
  async asyncData({ $apiService, params }) {
    const info = await $apiService.get(ENDPOINT_PROJECTS + "/" + params.id);

    return {
      head: {
        title: info.data.yoast_title,
        meta: info.data.yoast_meta
      },
      sections: {
        header: info.data.acf.section_header,
        image: info.data.acf.section_image,
        overview: info.data.acf.section_overview,
        quote: info.data.acf.section_citation,
        aDetail: info.data.acf.section_project_detail_a,
        bDetail: info.data.acf.section_project_detail_b,
        cDetail: info.data.acf.section_project_c,
        dDetail: info.data.acf.section_project_d,
        quote2: info.data.acf.section_citation_2,
        image2: info.data.acf.section_image_2,
        info: info.data.acf.section_infos
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.project {
  padding-top: 25px;
}
</style>
