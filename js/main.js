const app = new Vue(
    {
        el: '#app',
        data: {
            newTask: {
                text: '',
                done: false
            },
            tasks: [ ],
        },
        
        methods: {
            addTask() {
                if (this.newTask.text.trim() !== '') {
                    this.tasks.push({
                        text: this.newTask.text,
                        done: false
                    });
                    this.newTask.text = '';
                }
            },
            removeTask(index) {
                if (this.tasks[index] != undefined) {
                    this.tasks.splice(index, 1);
                }
            },
            clearAllTasks() {
                this.tasks = [ ];
            },
            
        }
    }
);