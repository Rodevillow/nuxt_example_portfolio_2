// PREFIX
export const HEADER_NAMESPACE_PREFIX = "projects/";

// MUTATIONS TYPES
export const SET_PROJECTS = "setProjectsMutation";
export const SET_NEXT_PAGE = "setNextPageMutation";
export const SET_ALL_PROJECTS_IS_LOADED = "setAllProjectsIsLoadedMutation";
export const SET_IS_LOADING = "setIsLoadingMutation";

// ACTIONS TYPES
export const LOAD_PROJECTS = "loadProjectsAction";

export const state = () => ({
  projects: [],
  isLoading: false,
  currentPage: 1,
  perPage: 9,
  allProjectsIIsLoaded: false
});

export const mutations = {
  [SET_PROJECTS](state, projects) {
    state.projects = [...state.projects, ...projects];
  },
  [SET_NEXT_PAGE](state) {
    state.currentPage = state.currentPage + 1;
  },
  [SET_ALL_PROJECTS_IS_LOADED](state) {
    state.allProjectsIIsLoaded = true;
  },
  [SET_IS_LOADING](state, isLoading) {
    state.isLoading = isLoading;
  }
};
