app.component('task-display', {
   props: {
    },
    template:
    /*html*/
    `<div class="task-display">
     <div class="task-container">

    <button
        class="button"
        v-on:click="sortTask">
        Sort task
        </button>
        <task-list v-if="tasks.length" :tasks="tasks"></task-list>
        <task-changer @task-changed="addTask"></task-changer>

         <!--   <ul>
        <li v-for="(task, index) in taskss" :key="index">
          New task {{ task.priority }} {{ task.task }}
          <br/>
          "{{ task.task }}"
          <br/>
        </li>
      </ul>
      </div> -->
      </div>
        </div>`,
        data() {
          return{
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
          {id: 1602, priority: 10, task: 'Tell family goodbye and take care' },
            ]
          }
        },

        methods: {
          addTask(task) {
            this.tasks.push(task)
        }
      }
  })