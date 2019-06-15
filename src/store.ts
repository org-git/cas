import Vue from "vue";
import Vuex from "vuex";
import getters from "@/store/getters";
import actions from "@/store/actions";
import state from "@/store/state";
import mutations from "@/store/mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: state || {},
  mutations: mutations || {},
  actions: actions || {},
  getters: getters || {}
});
