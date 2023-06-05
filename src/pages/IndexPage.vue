<template>
  
  <div class="banner">
    <div class="btitle">
      Manage your <br> time well
    </div>
    <div class="blogo">
      <i class="fa-regular fa-file"></i>
    </div>
  </div>
  <div class="categories">
     <h5>Categories</h5>
    <div class="types">
      <div id="categorie">
        <div>
          <span class="clogo"><i class="fa-solid fa-briefcase"></i></span>
        </div>
        <span class="ctitle">Work</span>
      </div>
      <div id="categorie">
        <div>
          <span class="plogo"><i class="fa-solid fa-user-large"></i></span>
        </div>
        <span class="ctitle">Personal</span>
      </div>
      <div id="categorie">
        <div>
          <span class="slogo"><i class="fa-solid fa-cart-shopping"></i></span>
        </div>
        <span class="ctitle">Shopping</span>
      </div>
      
        <div id="categorie">
            <div>
             <span class="hlogo"><i class="fa-solid fa-heart-pulse"></i></span>
            </div>
           <span class="ctitle">Health</span>
       </div>
    </div>
  </div>
  <div>
    
    
    <div class="modal" v-if="isModalOpen">
      <form class="modal-content" id="userInput" @submit.prevent="addd_user($event)" enctype="multipart/form-data" action="">
      
        <input type="text" name="name">
        <button >submit</button>
      
    </form>
   
    </div>
    <div class="modal" v-if="isModalOpen2">
      <form class="modal-content" @submit.prevent="update_user(this.userInput3, $event)" enctype="multipart/form-data" action="">
      
        <input v-model="userInput2" type="text" name="name">
        <button >Update</button>
      
    </form>
   
    </div>
    <!-- <form id="userInput" @submit.prevent="addd_user($event)" enctype="multipart/form-data" action="">
      
      <input v-model="userInput" type="text" name="name">
      <button @click="closeModal">submit</button>
    
  </form> -->
  </div>
  <div class="taskList">
    <div class="taskHead">
      <h5>You have {{ all_user.length }} tasks for today</h5>
      <p class="taskbutton" @click="openModal">Add Task</p>
    </div>
    <div class="tasks">
     
          <div v-for="user,index in all_user" :key="index" class="task">
            <div class="tInfo"><span class="number">{{ index +1 }}</span><span class="tTitle"> {{ user.name }}</span></div> 
            <div class="tButton">
              <button @click="openModal2(index)" class="button1"><i class="fa-regular fa-pen-to-square"></i></button>
              <button @click="delete_user(user._id)" class="button2"><i class="fa-solid fa-trash-can"></i></button>
            </div> 
          </div>
      
      

    </div>
  </div>
  
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { defineComponent, ref } from 'vue';
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
      userInput3: null,
      searchInput: null,
      names: this.fetch_users(),
       isModalOpen: ref(false),
       isModalOpen2: ref(false),
      
    }
  },
  created: async function () {
    await this.fetch_users();
  },
  watch: {
    key: {
      handler: function (newv, oldv) {
        console.log({ newv, oldv });
      },
      deep: true,
    }
  },
  methods: {
    ...mapActions(userStore, ["add_user","find_user", "save_data","fetch_users", "update_data"]),
    ...mapActions(userStore, {
      delete_All: "clear_users"
    }),
    ...mapActions(userStore, {
      delete_user: "delete_user",
    }),
    // ...mapActions(userStore, {
    //   save_data: "save_data",
     
    // }),
    openModal() {
      this.isModalOpen = !this.isModalOpen
    },
    closeModal() {
      this.isModalOpen = !this.isModalOpen
    },
    openModal2(index) {
      this.isModalOpen2 = !this.isModalOpen2
      this.userInput2 = this.all_user[index].name
      this.userInput3 = this.all_user[index]._id
      console.log(this.all_user[index]._id)
    },
    closeModal2() {
      this.isModalOpen2 = !this.isModalOpen2
    },
    addd_user: function($event){
      this.save_data($event),
      document.getElementById('userInput').reset();
      this.closeModal()
      // this.one= '';
      // this.two= '';

    },
    update_user: function(id, $event){
      this.update_data(id, $event),
      // console.log($event)
      this.userInput2 = '';
      this.closeModal2()
    },
    // addd_user: function(){
    //   this.save_data({
    //     name: "yamin",
    //     // email: "a"+( Math.ceil(Math.random()*10000))+"gmail.com",
    //   })
    //   // console.log(this.userInput);
    //   // this.userInput= '';

    // },
    editUser(index){
      this.userInput2 = this.all_user[index].name
      this.userInput3 = this.all_user[index]
      console.log(this.all_user[index]._id)
    },
    updateUser(index){
      this.all_user[index].name = this.userInput2
      this.userInput2 = "";
      this.closeModal2()
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
<style scoped>
.banner{
  background-image: linear-gradient(to right, #757dedb7, #4c4a4892);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 35px;
  margin: 20px 15px;
  border-radius: 15px;
}
.btitle{
  color: white;
  font-size: 16px;
}
.blogo{
  font-size: 54px;
  color: rgb(197, 200, 243);
}
h5{
  margin-left: 15px;
  font-size: 15px;
  font-weight: 900;
}
.types{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* padding: 0px 30px; */
  /* border: 2px solid red; */
  /* gap: 10px; */
  /* justify-content: space-evenly; */
  /* justify-content: space-between; */
}
#categorie{
  display: grid;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.clogo{
 font-size: 22px;
 border: 1px solid rgba(6, 28, 153, 0.53);
 padding: 10px 12px;
 border-radius: 12px;
 color: rgba(43, 137, 239, 0.737);
}
.plogo{
 font-size: 22px;
 border: 1px solid rgba(216, 219, 23, 0.865);
 padding: 10px 12px;
 border-radius: 12px;
 color: rgba(239, 161, 43, 0.621);
}
.slogo{
 font-size: 22px;
 border: 1px solid rgba(22, 182, 8, 0.737);
 padding: 10px 12px;
 border-radius: 12px;
 color: rgba(21, 200, 72, 0.546);
}
.hlogo{
 font-size: 22px;
 border: 1px solid rgba(246, 15, 15, 0.763);
 padding: 10px 12px;
 border-radius: 12px;
 color: rgba(237, 10, 10, 0.806);
}
.ctitle{
  text-align: center;
  margin-top: 20px;
  font-weight: 700;
  /* border: 2px solid skyblue; */
}
.taskHead{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.taskbutton{
  margin-right: 30px;
  background-image: linear-gradient(to right, #757dedb7, #4c4a4892);
  padding: 8px 15px;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 700;
  color: white;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
}
.task{
  /* border: 1px solid rgb(98, 89, 89); */
  box-shadow: 2px 1px 6px 1px rgb(159, 222, 226);
  margin: 22px 15px;
  padding: 12px 8px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.tInfo{
  display: flex;
  justify-content: center;
  align-items: center;
}
.number{
  font-size: 18px;
  font-weight: 900;
  color: #636693b9;
}
.tTitle{
  font-weight: 900;
  margin-left: 20px;
  color: rgb(144, 136, 141);
}
.button1{
  border: none;
  background-color: white;
  font-size: 20px;
  color: rgb(111, 111, 218);
  margin-right: 13px;
  cursor: pointer;
}
.button2{
  border: none;
  background-color: white;
  font-size: 20px;
  color: rgb(237, 127, 127);
  margin-right: 10px;
  cursor: pointer;
}
</style>
