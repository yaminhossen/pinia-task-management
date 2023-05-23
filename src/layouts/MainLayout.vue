<template>
  <div class="title">Quasar todo</div>
  <router-view></router-view>
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
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style scoped>
.title{
  text-align: center;
  background-color: aliceblue;
  padding: 10px 0px;
  font-size: larger;
  font-weight: bold;
}

</style>
