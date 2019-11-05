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
      <b-nav-item active>Makanan</b-nav-item>
      <b-nav-item>
        <router-link to="/minuman">MINUMAN</router-link>
      </b-nav-item>
    </b-nav>
    <h1>{{title}}</h1>
    <b-row>
      <b-card
        class="mx-3"
        v-for="(el, index) in makanan"
        :key="index"
        :title="el.name"
        :img-src="el.image"
        style="max-width: 23rem"
      >
        <b-card-text>{{el.harga}}</b-card-text>
      </b-card>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Menu Makanan",
      makanan: [
        {
          name: "Udang Bakar Madu Pedas",
          image:
            "https://www.bandar-djakarta.com/wp-content/uploads/2018/01/Udang-Bakar-Madu-Pedas.jpg",
          harga: "Rp. 45000"
        },
        {
          name: "Udang Bakar Saus Teluk",
          image:
            "https://www.bandar-djakarta.com/wp-content/uploads/2018/01/Udang-Bakar-Saos-Teluk.jpg",
          harga: "Rp. 55000"
        },
        {
          name: "Udang BBQ Cheese",
          image:
            "https://www.bandar-djakarta.com/wp-content/uploads/2018/01/Udang-BBQ-with-Cheese.jpg",
          harga: "Rp. 75000"
        },
        {
          name: "Cumi Saos Mentega",
          image:
            "https://www.bandar-djakarta.com/wp-content/uploads/2018/01/Cumi-Saos-Mentega.jpg",
          harga: "Rp. 55000"
        },
        {
          name: "Cumi Goreng Tepung",
          image:
            "https://www.bandar-djakarta.com/wp-content/uploads/2018/01/Cumi-goreng-tepung.jpg",
          harga: "Rp. 35000"
        },
        {
          name: "Cumi Bakar Saos Jali",
          image:
            "https://www.bandar-djakarta.com/wp-content/uploads/2018/01/Cumi-Bakar-saos-Jali.jpg",
          harga: "Rp. 80000"
        },
        {
          name: "Lobster BBQ Cheese",
          image:
            "https://www.bandar-djakarta.com/wp-content/uploads/2018/01/Lobster-BBQ-with-Cheese.jpg",
          harga: "Rp. 100000"
        },
        {
          name: "Lobster Bakar Saos Teluk",
          image:
            "https://www.bandar-djakarta.com/wp-content/uploads/2018/01/Lobster-Bakar-Saos-Teluk.jpg",
          harga: "Rp. 90000"
        },
        {
          name: "Lobster Bakar Madu",
          image:
            "https://www.bandar-djakarta.com/wp-content/uploads/2018/01/Lobster-Bakar-madu.jpg",
          harga: "Rp. 950000"
        }
      ]
    };
  }
};
</script>

<style>
</style>