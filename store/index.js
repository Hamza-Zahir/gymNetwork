import en from "~/plugins/en";
import ja from "~/plugins/ja";
import ko from "~/plugins/ko";
import th from "~/plugins/th";
import zh from "~/plugins/zh";
import es from "~/plugins/es";
import pt from "~/plugins/pt";
import ru from "~/plugins/ru";
import plugins from "~/plugins/index.js";
const text_content = {
  EN: en,
  JA: ja,
  KO: ko,
  TH: th,
  中文: zh,
  ES: es,
  PT: pt,
  RU: ru,
};
const state = {
  language:"EN",
  content: text_content["EN"],
  marginTop: "100px",
TotalBurnt:"-------",
GYMNETPrice:"-------",
TotalSupply:"-------",
TotalValueLocked:"-------",


};

const getters = {
  marginTop: (state) => state.marginTop,
  content: (state) => state.content,
  language: (state) => state.language,
  TotalBurnt: (state) => state.TotalBurnt,
  GYMNETPrice: (state) => state.GYMNETPrice,
  TotalSupply: (state) => state.TotalSupply,
  TotalValueLocked: (state) => state.TotalValueLocked,

};
const actions = {
  getmarginTop({ commit }) {
    const hight = document.getElementById("HeadApp");
    commit("setMarginTop", `${hight.offsetHeight}px`);
  },
  stourContent({ commit }, lang) {

    commit("setContent", text_content[lang]);
    commit("setLanguage", lang);
    localStorage.setItem("language", lang);

  },
  getContent({ commit }) {

      const lang = localStorage.getItem("language")
      if(
        lang == "EN" ||
        lang == "JA" ||
        lang == "KO" ||
        lang == "TH" ||
        lang == "中文" ||
        lang == "ES" ||
        lang == "PT" ||
        lang == "RU"
       ){
      commit("setContent", text_content[lang]);
      commit("setLanguage", lang);
}
  },

 async LoadBlockchainData({commit}){
const data = await plugins.LoadBlockchainData()
commit("setTotalBurnt", data.TotalBurnt);
commit("setGYMNETPrice", data.GYMNETPrice);
commit("setTotalSupply", data.TotalSupply);
commit("setTotalValueLocked", data.TotalValueLocked);

  }


};
const mutations = {
  setMarginTop: (state, marginTop) => (state.marginTop = marginTop),
  setContent: (state, content) => (state.content = content),
  setLanguage: (state, language) => (state.language = language),
  setTotalBurnt: (state, TotalBurnt) => (state.TotalBurnt = TotalBurnt),
  setGYMNETPrice: (state, GYMNETPrice) => (state.GYMNETPrice = GYMNETPrice),
  setTotalSupply: (state, TotalSupply) => (state.TotalSupply = TotalSupply),
  setTotalValueLocked: (state, TotalValueLocked) => (state.TotalValueLocked = TotalValueLocked),

};

export default {
  state,
  getters,
  actions,
  mutations,
};
