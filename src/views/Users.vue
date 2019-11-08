<template>
  <div>
    <h1>Users</h1>
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
        <input type="email" class="form-control" v-model="email" placeholder="Email" />
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="jabatan" placeholder="Jabatan" />
      </div>
    </div>
    <button class="btn btn-primary mb-4" @click="addUser">Add User</button>
    <table class="table table-bordered custom-tabel">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Nama</th>
          <th scope="col">Email</th>
          <th scope="col">Jabatan</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, i) in users" :key="i">
          <th>{{ i + 1 }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.jabatan }}</td>
          <td>
            <!-- <button class="btn btn-warning mb-4" @click="updateUser(user)">Update User</button> -->
            <button class="btn btn-danger mb-4" @click="deleteUser(user)">Delete User</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      email: "",
      jabatan: "",
      // showBorder: false,
      users: [
        {
          name: "Aldi",
          email: "mail@mail.com",
          jabatan: "Koki"
        }
      ]
    };
  },
  methods: {
    onshowBorder() {
      this.showBorder = true;
    },
    getUsers() {
      let api = "http://localhost:3000/users";
      this.axios
        .get(api)
        .then(users => {
          console.log("SUCCESS", users.data.data);
          this.users = users.data.data;
        })
        .catch(err => {
          console.log("ERROR", err);
        });
    },
    addUser() {
      let newUser = {
        name: this.name,
        email: this.email,
        jabatan: this.jabatan
      };
      let api = "http://localhost:3000/users";
      this.axios
        .post(api, newUser)
        .then(() => {
          this.getUsers();
        })
        .catch(err => {
          console.log("ERROR", err);
        });
    },
    // updateUser(user) {
    //   let newData = {
    //     name: user.name,
    //     email: user.email
    //   };
    //   let api = "http://localhost:3000/users/" + user._id;
    //   this.axios
    //     .put(api, newData)
    //     .then(user => {
    //       console.log(user.data);
    //       this.getUsers();
    //     })
    //     .catch(err => {
    //       console.log("ERROR", err);
    //     });
    // },
    deleteUser(user) {
      let delData = {
        name: user.name,
        email: user.email,
        jabatan: user.jabatan
      };
      let api = "http://localhost:3000/users/" + user._id;
      this.axios
        .delete(api, delData)
        .then(user => {
          console.log(user.data);
          this.getUsers();
        })
        .catch(err => {
          console.log("ERROR", err);
        });
    }
  },
  created() {
    this.getUsers();
  }
};
</script>

<style>
.showBorder {
  border: 1px solid black;
}
</style>