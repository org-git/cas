import Vue from "vue";
import Vuex from "vuex";
import getters from "@/store/getters";
import actions from "@/store/actions";
import state from "@/store/state";
import mutations from "@/store/mutations";

Vue.use(Vuex);

// https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context("@/store/modules", true, /\.ts$/);

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {});

export default new Vuex.Store({
  state: state || {},
  mutations: mutations || {},
  actions: actions || {},
  getters: getters || {}
});
