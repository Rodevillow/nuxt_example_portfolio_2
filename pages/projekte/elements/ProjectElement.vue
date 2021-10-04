<template>
  <NuxtLink class="project" tag="div" :to="'/projekte/' + projectData.id">
    <Img class="project__image" :imageUrl="getImage" />
    <div class="project__title">
      {{ projectData.acf.section_header.headline }}
    </div>
  </NuxtLink>
</template>

<script>
import Img from "@/components/ui/elements/Img";

export default {
  name: "ProjectElement",
  props: {
    projectData: {
      type: Object,
      require: false
    }
  },
  components: {
    Img
  },
  computed: {
    getImage() {
      if ("wp:featuredmedia" in this.projectData._embedded) {
        return this.projectData._embedded["wp:featuredmedia"][0].link;
      }

      return null;
    }
  }
};
</script>

<style lang="scss" scoped>
.project {
  width: 100%;
  margin-bottom: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid $borderColor;
  overflow: hidden;
  position: relative;

  &:last-child {
    border-bottom: none;
  }

  .project__title {
    position: absolute;
    padding-bottom: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $light;
    font-size: 20px;
    pointer-events: none;
    visibility: hidden;
  }

  &__image {
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      filter: grayscale(50%) blur(1px) brightness(0.7);

      & ~ .project__title {
        visibility: visible;
      }
    }
  }
}
</style>
