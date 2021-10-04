<template>
  <div class="portfolio">
    <div class="projects__list row">
      <div class="projects__list--mobile col-xs-12 col-sm-6">
        <ProjectElement
          :projectData="project"
          v-for="(project, key) in getMobileColumnMain"
          :key="key"
        />
      </div>
      <div
        class="projects__list--mobile col-xs-12 col-sm-6"
        v-if="!this.oneColumn"
      >
        <ProjectElement
          :projectData="project"
          v-for="(project, key) in getMobileColumnAdditional"
          :key="key"
        />
      </div>
      <div class="projects__list--desctop col-sm-4">
        <ProjectElement
          :projectData="project"
          v-for="(project, key) in getLeftColumn"
          :key="key"
        />
      </div>
      <div class="projects__list--desctop col-sm-4">
        <ProjectElement
          :projectData="project"
          v-for="(project, key) in getMiddleColumn"
          :key="key"
        />
      </div>
      <div class="projects__list--desctop col-sm-4">
        <ProjectElement
          :projectData="project"
          v-for="(project, key) in getRightColumn"
          :key="key"
        />
      </div>
    </div>
    <div
      class="text-center options"
      v-if="!this.$store.state.projects.allProjectsIIsLoaded"
    >
      <ButtonDefault @click="loadMoreProjectsClick" class="btn-more">
        <span v-if="!this.$store.state.projects.isLoading">Mehr sehen</span>
        <b-icon
          v-if="this.$store.state.projects.isLoading"
          icon="three-dots"
          animation="cylon"
        ></b-icon>
      </ButtonDefault>
    </div>
  </div>
</template>

<script>
import ButtonDefault from "@/components/ui/buttons/ButtonDefault";
import ProjectElement from "@/pages/projekte/elements/ProjectElement";

const ONE_COLUMN_MAX_WIDTH = 575;
// -----
const FIRST_COLUMN = 0;
const SECOND_COLUMN = 1;
const THIRT_COLUMN = 2;

export default {
  name: "PortfolioSection",
  data() {
    return {
      oneColumn: false
    };
  },
  components: {
    ButtonDefault,
    ProjectElement
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.oneColumn = window.innerWidth <= ONE_COLUMN_MAX_WIDTH;
    });
  },
  computed: {
    getMobileColumnMain() {
      let maxColumn = this.oneColumn ? FIRST_COLUMN : SECOND_COLUMN;
      return this.filterEachElementByNumber(FIRST_COLUMN, maxColumn);
    },
    getMobileColumnAdditional() {
      return this.filterEachElementByNumber(SECOND_COLUMN, SECOND_COLUMN);
    },
    getLeftColumn() {
      return this.filterEachElementByNumber(FIRST_COLUMN, THIRT_COLUMN);
    },
    getMiddleColumn() {
      return this.filterEachElementByNumber(SECOND_COLUMN, THIRT_COLUMN);
    },
    getRightColumn() {
      return this.filterEachElementByNumber(THIRT_COLUMN, THIRT_COLUMN);
    }
  },
  methods: {
    loadMoreProjectsClick(event) {
      this.$emit("loadMoreProjectsClick", event);
    },
    filterEachElementByNumber(column, maxColumns) {
      let count = 0;
      let resultArray = [];

      [...new Set(this.$store.state.projects.projects)].forEach(item => {
        if (count === column) {
          resultArray.push(item);
        }

        if (count >= maxColumns) {
          count = 0;
        } else {
          count = count + 1;
        }
      });

      return resultArray;
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio {
  .options {
    margin-top: 50px;
    .btn-more {
      width: 190px;
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        margin: auto;
      }
    }
  }
  .projects__list {
    &--mobile {
      display: block;
    }
    &--desctop {
      display: none;
    }
  }
}

@include media-breakpoint-up(lg) {
  .portfolio {
    .projects__list {
      &--mobile {
        display: none;
      }
      &--desctop {
        display: block;
      }
    }
  }
}
</style>
