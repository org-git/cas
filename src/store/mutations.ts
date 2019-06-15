import { MutationTree } from "vuex";

const mutations: MutationTree<any> = {
  SET_TOKEN(state: any, data: any): void {
    state.token = data;
  }
};

export default mutations;
