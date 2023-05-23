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
    <ul>
      <li v-for="(item, index) in userList" :key="index">
        {{ item }}
        <button @click="delete_user(index)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { defineComponent } from 'vue';
import userStore from "../stores/userStore";

export default defineComponent({
  name: "homePage",
  data: function () {
    return {
      key: '',
      userInput: null,
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
      delete_user: "delete_user",
    }),
    new_user: function(){
      this.add_user({
        name: this.userInput,
        email: "a"+( Math.ceil(Math.random()*10000))+"gmail.com",
      })
    }
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
  }
})
</script>

<style></style>