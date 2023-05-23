<template>
<div>
  <h5>Task Management</h5>
  <div class="tasks">
    <form @submit.prevent="taskStore.addTask(input)">
      <input v-model="taskStore.taskInput" type="text" placeholder="Add Your Task" name="search" id=""><button type="submit">add</button>
    </form>
    <div>
      Your recent task: <span class="input">{{ taskStore.taskInput }}</span>
    </div>
    <div class="task">
       <div v-for="(task, index) in taskStore.tasks" :key="index" class="name">
      <input class="cheakbox" type="checkbox" name="cheakbox" id=""> <span >{{ task }}</span> 
   
    <i class="fa-regular fa-pen-to-square"></i> <i @click="taskStore.deleteTask(index)" class="fa-solid fa-trash-can"></i>
       </div>
       <button @click="taskStore.clearAll">Clear All</button>
   </div>
  </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import {useCounterStore} from '../stores/example-store'

export default defineComponent({
  name: 'IndexPage',
  setup (){
    const taskStore = useCounterStore()
    const input = taskStore.taskInput;
    return {taskStore, input}
    
  },
  
})
</script>
<style scoped>
h5{
  text-align: center;
}
.input{
  font-size: large;
  font-weight: bold;
}

</style>
