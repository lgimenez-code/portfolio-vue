import { defineStore } from "pinia";
import { data } from "../mockData/mockedData.js";

export const usePageDataStore = defineStore("pageData", {
  state: () => ({
    currentLanguage: 'en',
  }),
  getters: {
    getCurrentLanguageData(state) {
      return data[state.currentLanguage];
    },
  },
  actions: {
    setLanguage(lang) {
      // change the language only if it is different from the current one
      if (lang && data[lang] && this.currentLanguage !== lang) {
        this.currentLanguage = lang;
      }
    },
  },
});
