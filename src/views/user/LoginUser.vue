<template>
  <div>
    <b-navbar type="light" variant="light" class="sticky-top">
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/">Beranda</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/about">About</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/makanan">Menu</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/karyawan">karyawan</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Password"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Level:" label-for="input-3">
        <b-form-select id="input-3" v-model="form.level" :options="level" required></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        level: null,
        checked: []
      },
      level: [
        { text: "Select One", value: null },
        "Chef",
        "Waiters",
        "Cashier"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.level = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>