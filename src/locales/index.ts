import VueI18n from "vue-i18n";

const i18n: VueI18n = new VueI18n({
  locale: localStorage.getItem("lang") || "zh-cn", // 语言标识
  messages: {
    "zh-cn": require("@locales/zh-cn")
    // "en": require("@/locales/en")
  }
});

export default i18n;
