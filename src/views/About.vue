<template>
  <div class="about">
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
    <h4>Restoran Seafood Legendaris sejak tahun 1945</h4>
  </div>
</template>
