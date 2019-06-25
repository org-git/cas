<template>
  <b-row align-h="center" align-v="center">
    <b-col cols="4" align-self="center">
      <b-card header="Dashboard" border-variant="primary">
        <b-table striped hover responsive :items="items"></b-table>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      items: [{ name: "Github" }, { name: "BootstrapVue" }]
    };
  }
};
</script>
