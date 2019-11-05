<template>
  <div>
    <b-navbar type="dark" variant="dark" class="fixed-top">
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
    <h2>Bandung Seafood</h2>
    <div class="text-right mb-3">
      <a href="/user/login" class="btn btn-primary">LOGIN</a>
    </div>
    <hr />
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          nama: "Bambang",
          posisi: "Koki"
        },
        {
          nama: "Dian",
          posisi: "Koki"
        },
        {
          nama: "Tom",
          posisi: "Pelayan"
        },
        {
          nama: "Erson",
          posisi: "Pelayan"
        },
        {
          nama: "Lia",
          posisi: "Kasir"
        }
      ]
    };
  }
};
</script>

<style>
</style>