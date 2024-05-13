import { createStore } from "vuex";

import { i18n } from "../i18n/index.js";
import { CHANGE_COUNTRY_CODE } from "../constants/store.js";

export const store = createStore({
  state() {
    return {
      country: "KZ",
    };
  },
  mutations: {
    [CHANGE_COUNTRY_CODE]: (state, countryCode) => {
      state.country = countryCode;
      i18n.global.locale = state.country.toLocaleLowerCase();
    },
  },
});
