import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  locale: "kz",
  fallbackLocale: "kz",
  messages: {
    kz: {
      title: "Біздің филиалдар",
      search: "Іздеу",
      filterInputPlaceholder: "Филиалдарды қала бойынша іздеу",
    },
    kg: {
      title: "Биздин филиалдар",
      search: "Издөө",
      filterInputPlaceholder: "Филиалдарды шаар боюнча издөө",
    },
    uz: {
      title: "Our branches",
      search: "Search",
      filterInputPlaceholder: "Search branches by city",
    },
  },
});
