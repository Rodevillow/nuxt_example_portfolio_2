import { ENDPOINT_SHARED_PAGE } from "@/api/constants.endpoints";

// MUTATIONS TYPES
export const SET_IS_LOADING = "setIsLoadingMutation";
export const SET_LOGO = "setLogoMutation";
export const SET_NAV_MENU = "setNavMenuMutation";
export const SET_FOOTER_LINKS = "setFooterLinksMutation";
export const SET_FOOTER_EMAIL_LABEL = "setFooterEmailLabelMutation";
export const SET_FOOTER_EMAIL = "setFooterEmailMutation";
export const SET_FOOTER_COPYRIGHT = "setFooterCopyrightMutation";

// ACTIONS TYPES
export const GET_TEST = "getTestAction";

export const state = () => ({
  isLoading: false,
  logo: null,
  navigationMenu: null,
  footerLinks: null,
  footerEmailLabel: null,
  footerEmail: null,
  footerCopyright: null
});

export const mutations = {
  [SET_IS_LOADING](state, isLoading = false) {
    state.isLoading = isLoading;
  },
  [SET_LOGO](state, logo) {
    state.logo = logo;
  },
  [SET_NAV_MENU](state, navigationMenu) {
    state.navigationMenu = navigationMenu;
  },
  [SET_FOOTER_LINKS](state, links) {
    state.footerLinks = links;
  },
  [SET_FOOTER_EMAIL_LABEL](state, emailLabel) {
    state.footerEmailLabel = emailLabel;
  },
  [SET_FOOTER_EMAIL](state, email) {
    state.footerEmail = email;
  },
  [SET_FOOTER_COPYRIGHT](state, copyright) {
    state.footerCopyright = copyright;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await this.$apiService.get(ENDPOINT_SHARED_PAGE);

    // Header
    commit(SET_LOGO, response.data.acf.section_header.logo);
    commit(SET_NAV_MENU, response.data.acf.section_header.navigation_menu);

    // Footer
    commit(SET_FOOTER_LINKS, response.data.acf.footer_section.links);
    commit(
      SET_FOOTER_EMAIL_LABEL,
      response.data.acf.footer_section.email_label
    );
    commit(SET_FOOTER_EMAIL, response.data.acf.footer_section.email);
    commit(SET_FOOTER_COPYRIGHT, response.data.acf.footer_section.copyright);
  }
};
