<template>
  <q-layout view="lHh Lpr lFf">
    <q-header >
     
        
        <div class="navbar">
          <div>
            
        <button class="menu"  @click="toggleLeftDrawer"><i class="fa-solid fa-bars"></i></button>
        </div>
       

        <div class="logo">
          <img src="expert-1.jpg" alt="">
        </div>
        </div>
      
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <div>
        <div>
          <div class="drawerinfo">
            <img src="expert-1.jpg" alt="" >
            <h5>Yamin Hossain</h5>
            <h6>yamin123@gmail.com</h6>
          </div>
          <div class="feature">
            <div> <span class="flogo"><i class="fa-solid fa-moon"></i></span><span class="ftitle">Dark Mode</span></div>
            <div class="farrow"><i class="fa-solid fa-toggle-off"></i></div>
          </div>
          <div class="feature">
            <div> <span class="flogo"><i class="fa-solid fa-comment"></i></span><span class="ftitle">Feedback Us</span></div>
            <div class="farrow"><i class="fa-solid fa-arrow-right"></i></div>
          </div>
          <div class="feature">
            <div> <span class="flogo"><i class="fa-solid fa-trash"></i></span><span class="ftitle">Clear All</span></div>
            <div class="farrow"><i class="fa-solid fa-arrow-right"></i></div>
          </div>
          <div class="feature">
            <div> <span class="flogo"><i class="fa-solid fa-circle-question"></i></span><span class="ftitle">FAQ</span></div>
            <div class="farrow"><i class="fa-solid fa-arrow-right"></i></div>
          </div>
          <div class="feature">
            <div> <span class="flogo"><i class="fa-solid fa-user"></i></span><span class="ftitle">About US</span></div>
            <div class="farrow"><i class="fa-solid fa-arrow-right"></i></div>
          </div>
          <div class="feature">
            <div> <span class="flogo"><i class="fa-solid fa-star"></i></span><span class="ftitle">Rate Us</span></div>
            <div class="farrow"><i class="fa-solid fa-arrow-right"></i></div>
          </div>
          <div class="feature">
            <div> <span class="flogo"><i class="fa-solid fa-globe"></i></span><span class="ftitle">Release Log</span></div>
            <div class="farrow"><i class="fa-solid fa-arrow-right"></i></div>
          </div>
          <div class="lfeature">
            <div> <span class="llogo"><i class="fa-solid fa-right-from-bracket"></i></span><span class="ltitle">LogOut</span></div>
            <div class="larrow"><i class="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
      </div>
      <q-footer>
        <div class="dfooter"></div>
      </q-footer>
    </q-drawer>

    <q-page-container>
      <!-- <div>
    <button @click="openModal">Open Modal</button>

    <div class="modal" v-if="isModalOpen">
      <div class="modal-content">
        <h2>Modal Title</h2>
        <p>Modal Content</p>
        <button @click="closeModal">submit</button>
      </div>
    </div>
  </div> -->
      <router-view />
      
    </q-page-container>
    <q-footer>
      <div class="footers">
        <div class="footer">
          <div><i class="fa-solid fa-house"></i></div>
        <div><i class="fa-solid fa-layer-group"></i></div>
        <div><i class="fa-solid fa-magnifying-glass"></i></div>
        <div  @click="toggleLeftDrawer"><i class="fa-solid fa-gear"></i></div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>


<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false);
    let isModalOpen = ref(false);

    return {
      essentialLinks: linksList,
      isModalOpen,
      leftDrawerOpen,
      openModal() {
      isModalOpen.value = !isModalOpen.value
    },
    closeModal() {
      isModalOpen.value = !isModalOpen.value
    },
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style scoped>
.navbar{
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  /* border: 1px solid red; */
  align-items: center;
  
  
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
.menu{
  color: rgb(38, 35, 35);
  margin-left: 20px;
  background-color: white;
  font-size: 18px;
  margin-bottom: 5px;
 border: 1px solid rgb(14, 65, 175);
 border-radius: 5px;
 cursor: pointer;
}
.menu i{
  /* font-size: 20px; */
  /* background-color: white; */
  /* padding: 2px; */
  /* border: none; */
  /* margin-bottom: 3px; */
}
.logo img{
  width: 40px;
  border-radius: 30%;
  margin-right: 20px;
}
.footers{
  background-color: white;
  /* border-radius: 5px; */
  /* margin: 0 10px; */
}
.footer{
  background-color: #7e797992;
  background-image: linear-gradient(to right, #63615c92, #6168d1b7);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-radius: 10px 10px 0 0;
 
}
.footer i{
  font-size: 22px;
  /* color: rgb(43, 58, 66); */
  color: white;
  cursor: pointer;
}
.drawerinfo {
text-align: center;
margin-top: 60px;
}
.drawerinfo img{
  width: 70px;
  border-radius: 50%;
}
.drawerinfo h5{
  margin: 0;
  font-weight: 900;
  color: rgb(57, 57, 57);
}
.drawerinfo h6{
  margin: 0;
  color: rgb(89, 87, 87);
  margin-bottom: 40px;
}
.feature{
  display: flex;
  justify-content: space-between;
  margin: 20px 15px;
  padding: 10px;
  border-radius: 10px;
  background-image: linear-gradient(to right, #262d95ba, #603811ba);
  box-shadow: 1px 3px 6px 1px rgb(49, 53, 53);
}
.flogo{
  font-size: 20px;
  font-weight: 700;
  color: rgb(240, 235, 235);
}
.ftitle{
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
  color: #f5f5f9b7;
}
.farrow{
  font-size: 20px;
  color: #ffffffb7;
}
.lfeature{
  display: flex;
  justify-content: space-between;
  margin: 20px 15px;
  margin-bottom: 60px;
  padding: 10px;
  border-radius: 10px;
  background-color: black;
  box-shadow: 1px 3px 6px 1px rgb(49, 53, 53);
}
.llogo{
  font-size: 20px;
  font-weight: 700;
  color: red;
}
.ltitle{
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
  color: red;
}
.larrow{
  font-size: 20px;
  color: red;
}
.dfooter{
  background-image: linear-gradient(to right, #262d95ba, #603811ba);
  height: 50px;
}
</style>
