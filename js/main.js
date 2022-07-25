const app = new Vue(
    {
        el: '#app',
        data: {
            newTask: {
                text: '',
                done: false
            },
        },
        tasks: [ ],

        methods: {
            addTask() {
                // if (this.newTask.text == '') {
                //     this.newTask.push({
                //         text: this.newTask.text,
                //         done: false
                //     });
                // } else {
                //     this.newTask.text = '';
                // }
            },

            removeTask(index) {
                this.tasks.splice(index, 1);
            },
        }
    }
);