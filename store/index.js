import en from "~/plugins/en";
// import es from "~/plugins/es";
import ja from "~/plugins/ja";
import ko from "~/plugins/ko";
import th from "~/plugins/th";
import zh from "~/plugins/zh";

const text_content = {
  EN: en,
  // ES: es,
  JA: ja,
  KO: ko,
  TH: th,
  ZH: zh,
};
const state = {
  language:"EN",
  content: text_content["EN"],
  marginTop: "100px",
};

const getters = {
  marginTop: (state) => state.marginTop,
  content: (state) => state.content,
  language: (state) => state.language,
};
const actions = {
  getmarginTop({ commit }) {
    const hight = document.getElementById("HeadApp");
    commit("setMarginTop", `${hight.offsetHeight}px`);
  },
  stourContent({ commit }, lang) {

    commit("setContent", text_content[lang]);
    commit("setLanguage", lang);
    localStorage.setItem("text_content", lang);

  },
  getContent({ commit }) {
    if (localStorage.getItem("text_content")) {
      commit("setContent", text_content[localStorage.getItem("text_content")]);
      commit("setLanguage", localStorage.getItem("text_content"));

    }
  },
};
const mutations = {
  setMarginTop: (state, marginTop) => (state.marginTop = marginTop),
  setContent: (state, content) => (state.content = content),
  setLanguage: (state, language) => (state.language = language),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
