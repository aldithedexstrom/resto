<template>
  <div>
    <h1>Bandung Seafood</h1>
    <div class="w-50 mx-auto">
      <div class="form-group"></div>
    </div>
    <div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="id" placeholder="ID" />
      </div>
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
    <button class="btn btn-primary mb-4" @click="addFood">Tambah Makanan</button>
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
    <modal name="hello-world">hello, world!</modal>
    <b-nav tabs justified>
      <b-nav-item active>MAKANAN</b-nav-item>
      <b-nav-item>
        <router-link to="/minuman">MINUMAN</router-link>
      </b-nav-item>
    </b-nav>
    <h1>{{title}}</h1>
    <b-row>
      <b-card
        class="mx-3"
        v-for="(food, index) in foods"
        :key="index"
        :title="food.name"
        :img-src="food.image"
        style="max-width: 23rem"
      >
        <b-card-text>Rp. {{ food.harga }}</b-card-text>
        <button class="btn btn-sm btn-success mb-4">Tambah ke Keranjang</button>
        <button class="btn btn-sm btn-danger mb-4" @click="deleteFood(food)">Hapus Makanan</button>
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
      title: "Menu Makanan",
      foods: [
        {
          name: "Udang Bakar Madu Pedas",
          image:
            "https://www.bandar-djakarta.com/wp-content/uploads/2018/01/Udang-Bakar-Madu-Pedas.jpg",
          harga: "45000"
        }
      ]
    };
  },
  methods: {
    onshowBorder() {
      this.showBorder = true;
    },
    getFoods() {
      let api = "http://localhost:3000/foods";
      this.axios
        .get(api)
        .then(foods => {
          console.log("SUCCESS", foods.data.data);
          this.foods = foods.data.data;
        })
        .catch(err => {
          console.log("ERROR", err);
        });
    },
    addFood() {
      let newFood = {
        name: this.name,
        image: this.image,
        harga: this.harga
      };
      let api = "http://localhost:3000/foods";
      this.axios
        .post(api, newFood)
        .then(() => {
          this.getFoods();
        })
        .catch(err => {
          console.log("ERROR", err);
        });
    },
    deleteFood(food) {
      let api = "http://localhost:3000/foods/" + food._id;
      this.axios
        .delete(api)
        .then(foods => {
          console.log(foods.data);
          this.getFoods();
        })
        .catch(err => {
          console.log("ERROR", err);
        });
    }
  },
  created() {
    this.getFoods();
  },
  show() {
    this.$modal.show("hello-world");
  },
  hide() {
    this.$modal.hide("hello-world");
  }
};
</script>

<style>
</style>