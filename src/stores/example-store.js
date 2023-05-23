import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    tasks: ['tamim', 'ramim', 'mahin','nayeem'],
     taskInput: null,
     
  }),
  actions:{
    addTask(){
      this.tasks.push(this.taskInput)
      this.taskInput = null
    },
    deleteTask(index){
      this.tasks.splice(index, 1)
    },
    clearAll(){
      this.tasks = []
    }
    
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  // actions: {
  //   increment() {
  //     this.counter++;
  //   },
  // },
});
