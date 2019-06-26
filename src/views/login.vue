<template>
  <section>
    <div class="col-md-3 col-md-offset-6">
      <b-card-group deck>
        <b-card header="Login" header-tag="header" border-variant="primary">
          <b-form
            validated
            class="form-horizontal"
            role="form"
            @submit="onSubmit"
          >
            <b-form-group
              label-cols-md="3"
              label-align="right"
              label="UserName"
              label-for="username"
            >
              <b-form-input
                type="text"
                v-model="user.username"
                required
                trim
                placeholder="username"
                id="username"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-md="3"
              label-align="right"
              label="Password"
              label-for="password"
            >
              <b-form-input
                type="password"
                v-model="user.password"
                required
                trim
                placeholder="password"
                id="password"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
          </b-form>
        </b-card>
      </b-card-group>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: { username: "admin", password: "123456" }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.user));
    }
  }
};
</script>
