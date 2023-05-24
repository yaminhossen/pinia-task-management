<template>
  <div>
    <input type="text" v-model="key">
    <h6>{{ key }}</h6>
    <h6>total: {{ total_user }}</h6>
    <input v-model="userInput"> <br>
    <button @click="new_user()">add user</button>
    <br>
    search:
    <input v-model="searchInput" type="text">
    <br>
    Edit:
    <input v-model="userInput2" type="text">
    <h5>You have {{ userList.length }} match user.</h5>
    <ul>
      <li v-for="(item, index) in userList" :key="index">
        {{ item }}
        <button @click="delete_user(index)">delete</button>
        <button @click="editUser(index)">Edit</button>
        <button @click="updateUser(index)">Update</button>
      </li>
    </ul>
    <button @click="delete_All">Delete All</button>
    <About></About>
    <RouterLink to="/about">About</RouterLink>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { defineComponent } from 'vue';
import userStore from "../stores/userStore";
import About from 'src/components/About.vue';

export default defineComponent({
  name: "homePage",
  components: {About},
  data: function () {
    return {
      key: '',
      userInput: null,
      userInput2: null,
      searchInput: null,
    }
  },
  created: function () { },
  watch: {
    key: {
      handler: function (newv, oldv) {
        console.log({ newv, oldv });
      },
      deep: true,
    }
  },
  methods: {
    ...mapActions(userStore, ["add_user"]),
    ...mapActions(userStore, {
      delete_All: "clear_users"
    }),
    ...mapActions(userStore, {
      delete_user: "delete_user",
    }),
    new_user: function(){
      this.add_user({
        name: this.userInput,
        email: "a"+( Math.ceil(Math.random()*10000))+"gmail.com",
      }),
      this.userInput= '';

    },
    editUser(index){
      this.userInput2 = this.all_user[index].name
      console.log(this.all_user[index].name)
    },
    updateUser(index){
      this.all_user[index].name = this.userInput2
      this.userInput2 = ""
    }
  //   edit_user: function(){
  //     this.userInput2 = this.all_user.name;
  //   }
  },
  computed: {
    ...mapState(userStore, {
      all_user: 'users',
      single_user: "user",
      total_user: 'count',
    }),
    userList(){
      if(this.searchInput){
        return this.all_user.filter(user => user.name.includes(this.searchInput))
      }else{
        return this.all_user
      }
    },
    // editUser(n){
    //   // this.userInput2 = this.all_user[index].name
    //   console.log(this.all_user[n].name)
    // }
  }
})
</script>

<style></style>