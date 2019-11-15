<template>
  <div>
    <h1>Bandung Seafood</h1>
    <div class="text-right mb-3">
      <a href="/user/login" class="btn btn-primary">LOGIN</a>
    </div>
    <div class="w-50 mx-auto">
      <div class="form-group"></div>
    </div>
    <div class="container">
      <!-- <div class="form-group">
        <input type="text" class="form-control" v-model="id" placeholder="ID" />
      </div>-->
      <div class="form-group">
        <input type="text" class="form-control" v-model="name" placeholder="Nama" />
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="image" placeholder="Image" />
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="harga" placeholder="Harga" />
      </div>
    </div>
    <button class="btn btn-primary mb-4" @click="addDrink">Tambah Minuman</button>
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
        v-for="(el, index) in drinks"
        :key="index"
        :title="el.name"
        :img-src="el.image"
        style="max-width: 23rem"
      >
        <b-card-text>Rp. {{ el.harga }}</b-card-text>
        <button class="btn btn-sm btn-success mb-4">Tambah ke Keranjang</button>
        <button class="btn btn-sm btn-danger mb-4" @click="deleteDrink(drink)">Hapus Minuman</button>
      </b-card>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      image: "",
      harga: "",
      title: "Menu Minuman",
      drinks: [{}]
    };
  },
  methods: {
    onshowBorder() {
      this.showBorder = true;
    },
    getDrinks() {
      let api = "http://localhost:3000/drinks";
      this.axios
        .get(api)
        .then(drinks => {
          console.log("SUCCESS", drinks.data.data);
          this.drinks = drinks.data.data;
        })
        .catch(err => {
          console.log("ERROR", err);
        });
    },
    addDrink() {
      let newDrink = {
        name: this.name,
        image: this.image,
        harga: this.harga
      };
      let api = "http://localhost:3000/drinks";
      this.axios
        .post(api, newDrink)
        .then(() => {
          this.getDrinks();
        })
        .catch(err => {
          console.log("ERROR", err);
        });
    },
    deleteDrink(drink) {
      let api = "http://localhost:3000/drinks/" + drink._id;
      this.axios
        .delete(api)
        .then(drinks => {
          console.log(drinks.data);
          this.getDrinks();
        })
        .catch(err => {
          console.log("ERROR", err);
        });
    }
  },
  created() {
    this.getDrinks();
  }
};
</script>

<style>
</style>