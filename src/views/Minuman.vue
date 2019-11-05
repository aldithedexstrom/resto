<template>
  <div>
    <h1>Bandung Seafood</h1>
    <div class="text-right mb-3">
      <a href="/user/login" class="btn btn-primary">LOGIN</a>
    </div>
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
    <b-nav tabs justified>
      <b-nav-item>
        <router-link to="/makanan">MAKANAN</router-link>
      </b-nav-item>
      <b-nav-item active>MINUMAN</b-nav-item>
    </b-nav>
    <h1>{{ title }}</h1>
    <b-row>
      <b-card
        class="mx-3"
        v-for="(el, index) in minuman"
        :key="index"
        :title="el.name"
        :img-src="el.image"
        style="max-width: 23rem"
      >
        <b-card-text>{{ el.harga }}</b-card-text>
      </b-card>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Menu Minuman",
      minuman: [
        {
          name: "Es Jeruk",
          image:
            "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/12/27/5073465/5073465_883456c2-4b44-41f6-b654-d3ad4b172b28_700_700.jpg",
          harga: "Rp. 7500"
        },
        {
          name: "Jus Mangga",
          image:
            "https://s0.bukalapak.com/img/5276210033/w-1000/images__11_.jpeg",
          harga: "Rp. 15000"
        },
        {
          name: "Jus Jambu",
          image: "https://pbs.twimg.com/media/EBvgaSEUcAAhUoG.jpg",
          harga: "Rp. 75000"
        }
      ]
    };
  }
};
</script>

<style>
</style>