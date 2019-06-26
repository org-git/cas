var Mock: any = require("mockjs");
Mock.mock("/api/clients", {
  code: 200,
  message: "",
  data: [{ name: "Github" }, { name: "BootstrapVue" }]
});
