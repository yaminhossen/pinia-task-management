<template>
  <div>
    <input type="text" v-model="key">
    <h6>{{ key }}</h6>
    <h6>total: {{ total_user }}</h6>
    <button @click="new_user()">add user</button>
    <ul>
      <li v-for="(item, index) in all_user" :key="index">
        {{ item.name }}
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
        name: "a"+( Math.ceil(Math.random()*10000)),
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
  }
})
</script>

<style></style>