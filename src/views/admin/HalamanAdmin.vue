<template>
  <div>
    <table class="table table-bordered custom-tabel">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Nama</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(el, i) in users" :key="i">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ el.name }}</td>
          <td>{{ el.email }}</td>
          <td>
            <button @click="editUsers(el.id)">Edit</button>
            <button @click="removeUser(i)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-for="(user, i) in users" :key="i"></div>
    <input type="text" v-model="newUser.name" placeholder="Nama" />
    <input type="email" v-model="newUser.email" placeholder="Email" />
    <input type="password" v-model="newUser.password" placeholder="Password" />
    <button @click="addUser">Tambah Karyawan</button>

    <input type="text" v-model="id" />
    <input type="text" v-model="name" placeholder="Nama" />
    <button @click="editUsers">Edit Karyawan</button>
    <button v-on:click="boom('test')">coba</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      users: [],
      newUser: {
        id: "",
        name: "",
        email: "",
        password: ""
      }
    };
  },
  mounted() {
    if (localStorage.getItem("users")) {
      try {
        this.users = JSON.parse(localStorage.getItem("users"));
      } catch (e) {
        localStorage.removeItem("users");
      }
    }
  },
  methods: {
    addUser() {
      if (!this.newUser) {
        return;
      }
      // this.newUser.id = this.users.length = 1;
      this.users.push(this.newUser);
      this.newUser = "";
      this.saveUsers();
    },
    removeUser(x) {
      this.users.splice(x, 1);
      this.saveUsers;
    },
    saveUsers() {
      const parsed = JSON.stringify(this.users);
      localStorage.setItem("users", parsed);
    },
    editUsers(id) {
      console.log(this.id, this.name);
      // let id = this.id;
      let newName = this.name;
      let user = this.users.find(function(el) {
        return el.id == id;
      });
      user.name = newName;
      console.log(user);
    },
    boom: function() {
      alert(" boom! ");
    }
  }
};
</script>

<style>
.custom-tabel {
  background-color: chocolate;
}
</style>