<template>
        <task-add-form 
            @create="create"
        />
        <tasks-list 
            :tasks="tasks"
            @remove="removeTask"
        />
</template>

<script>
import TasksList from '@/components/TasksList.vue'
import TaskAddForm from '@/components/TaskAddForm.vue'

export default {
    components: {
        TasksList, TaskAddForm
    },
    data() {
        return {
            tasks: [],
        }
    },
    created() {
        this.loadTasks();
    },
    methods: {
        loadTasks() {
            const tasksFromStorage = localStorage.getItem('tasks');
            if (tasksFromStorage) {
                this.tasks = JSON.parse(tasksFromStorage);
            } else {
                
                this.tasks = [
                    {id: 1, name: 'Hire Artem Tarasov', body: 'really nice guy tho'},
                    {id: 2, name: 'Cook eggs', body: 'this text should help you to add more context to task2'},
                    {id: 3, name: 'watch that new video on YT', body: 'this text should help you to add more context to task3'},
                ];
                this.saveTasks(); 
            }
        },
        saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        create(task) { 
            this.tasks.push(task);
            this.saveTasks(); 
        },
        removeTask(task){
            this.tasks = this.tasks.filter(p => p.id !== task.id);
            this.saveTasks(); 
        }
    }
}
</script>

<style scoped> 
</style>