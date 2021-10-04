<template>
  <div class="projects">
    <PortfolioSection @loadMoreProjectsClick="doLoadMoreProjects" />
  </div>
</template>

<script>
import PortfolioSection from "@/pages/projekte/sections/PortfolioSection";
import {
  ENDPOINT_PROJECT_PAGE,
  ENDPOINT_PROJECTS
} from "@/api/constants.endpoints";
import {
  HEADER_NAMESPACE_PREFIX,
  SET_NEXT_PAGE,
  SET_PROJECTS,
  SET_ALL_PROJECTS_IS_LOADED,
  SET_IS_LOADING
} from "@/store/projects";

export default {
  name: "Projects",
  components: {
    PortfolioSection
  },
  head() {
    return {
      title: this.head.title,
      meta: this.head.meta
    };
  },
  methods: {
    async doLoadMoreProjects() {
      // Set is loading = true
      this.$store.commit(HEADER_NAMESPACE_PREFIX + SET_IS_LOADING, true);
      // Set next page
      this.$store.commit(HEADER_NAMESPACE_PREFIX + SET_NEXT_PAGE);
      // Load more projects list to store from API
      try {
        const projects = await this.$apiService.get(ENDPOINT_PROJECTS, {
          page: this.$store.state.projects.currentPage,
          per_page: this.$store.state.projects.perPage,
          _embed: true
        });
        // Add projects to store
        this.$store.commit(
          HEADER_NAMESPACE_PREFIX + SET_PROJECTS,
          projects.data
        );
      } catch (e) {
        if (e.code === "rest_post_invalid_page_number") {
          // Set all data is loaded
          this.$store.commit(
            HEADER_NAMESPACE_PREFIX + SET_ALL_PROJECTS_IS_LOADED,
            true
          );
        }
      } finally {
        // Set is loading = true
        this.$store.commit(HEADER_NAMESPACE_PREFIX + SET_IS_LOADING, false);
      }
    }
  },
  async asyncData({ $apiService, store }) {
    // Get projects page info
    const info = await $apiService.get(ENDPOINT_PROJECT_PAGE);

    if (store.state.projects.projects.length === 0) {
      try {
        const projects = await $apiService.get(ENDPOINT_PROJECTS, {
          page: store.state.projects.currentPage,
          per_page: store.state.projects.perPage,
          _embed: true
        });

        // Add projects to store
        store.commit(HEADER_NAMESPACE_PREFIX + SET_PROJECTS, projects.data);
      } catch (e) {
        if (e.code === "rest_post_invalid_page_number") {
          // Set all data is loaded
          store.commit(
            HEADER_NAMESPACE_PREFIX + SET_ALL_PROJECTS_IS_LOADED,
            true
          );
        }
      }
    }

    return {
      head: {
        title: info.data.yoast_title,
        meta: info.data.yoast_meta
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.projects {
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>
