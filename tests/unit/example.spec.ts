import { shallowMount } from "@vue/test-utils";
import pagination from "@/components/pagination.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg: string = "new message";
    const wrapper: any = shallowMount(pagination, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
