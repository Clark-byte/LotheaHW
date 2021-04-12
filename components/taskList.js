app.component('task-list', {
    props: {
        tasks: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="task-container">
    <h3>Morning:</h3>
        <ul>
        <li v-for="task in tasks" :key="task.id">
        {{ task.priority}} {{ task.task }}
        <br/>
        </li>
        </ul>
    </div>`
    
})