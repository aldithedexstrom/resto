<template>
  <div>
    <h1>Bandung Seafood</h1>
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
    <div class="text-right mb-3" align="right">
      <a href="/user/login" class="btn btn-primary">LOGIN</a>
    </div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      controls
      indicators
      background="#ababab"
      img-width="640"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Kepiting Pepes Edan"
        img-src="https://www.bandar-djakarta.com/wp-content/uploads/2018/01/Kepiting-Pepes-Edan.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Kepiting Saos Asam Manis"
        img-src="https://www.bandar-djakarta.com/wp-content/uploads/2018/01/Kepiting-saos-Asam-Manis.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Kepiting Saos Buttler Garlic"
        img-src="https://www.bandar-djakarta.com/wp-content/uploads/2018/01/Kepiting-Saos-Buttler-Garlic.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>