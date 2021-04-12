// JavaScript
//var Vue = require ('vue');

// const { default: Vue } = require("vue")
const app = Vue.createApp({
  data() {
    return {
      tasks: [
          {id: 1590, priority: 10, task: 'Wake up' },
          {id: 1591, priority: 9, task: 'Get up' },
          {id: 1592, priority: 9, task: 'Get out of bed' },
          {id: 1593, priority: 8, task: 'Brush teeth' },
          {id: 1594, priority: 6, task: 'Wash face' },
          {id: 1595, priority: 5, task: 'Fix bed hair' },
          {id: 1596, priority: 7, task: 'Make breakfast' },
          {id: 1597, priority: 3, task: 'Adjust bag contents for the day' },
          {id: 1598, priority: 4, task: 'Get changed' },
          {id: 1599, priority: 7, task: 'Eat breakfast' },
          {id: 1600, priority: 2, task: 'Feed fish' },
          {id: 1601, priority: 1, task: 'Double check belongings' },
          {id: 1602, priority: 10, task: 'Tell family goodbye and take care' }

      ],
    }
  },
  methods: {
    addTask(task) {
    this.tasks.push(task)
    },
    deleteTask(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    },
    sortTask(task) {
      this.task.slice().sort(a, b);
          return a.priority - b.priority
      },
      
    onSubmit() {
      if (this.priority === null || this.task === '') {
          alert('Some fields are incomplete, fill out every field shown.')
          return
      }
      let taskChange = {
          priority: this.priority,
          task: this.task
      }
      this.$emit('task-changed', taskChange)

      this.priority = null
      this.task = ''
  }
  },
  computed: {
    sortedTasks() {
      let tempTasks = this.tasks
      tempTasks = tempTasks.sort((a, b) => a.priority-b.priority, {
    
    sortTask(task){
      this.priority.sortBy(task)
      return a.priority - b.priority
    }
  })
  }
}
  })