app.component('task-changer', {
    template:
    /*html*/
    `<form class="task-changer" @submit.prevent="onSubmit">
    <h3> Alter a task </h3>
    <label for="priority">Priority:</label>
    <select id="priority" v-model.number="priority">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
    <option>9</option>
    <option>10</option>
    </select>
    
    <label for="task">Task:</label>
    <textarea id="task" v-model="task"></textarea>

     <input class="button" type="submit" value="Delete">
     <input class="button" type="submit" value="Add">

    </form>`,

    data() {
            return {
            priority: null,
            task: ''

        }
    },
    methods: {
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
    }
})