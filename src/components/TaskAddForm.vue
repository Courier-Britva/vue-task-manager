<template>
        <form class="task_form" @submit.prevent>
            <span class="task_form_name">
                You can add task here
            </span>
            <input 
                class="task_form_input" 
                v-model="task.name" 
                type="text" 
                placeholder="your new task here..."
            >

            <input 
                class="task_form_input" 
                v-model="task.body" 
                type="text"
                placeholder="Want to add discription?"
            >
            <button class="task_button" @click="addTask">
                Add
            </button>
        </form>
</template>

<script>
export default {
    data() {
        return {
            task: {
                name: '',
                body: ''
            }
        }
    },
    methods: {
        addTask() {
            this.task.id = new Date().getTime();
            this.$emit('create', this.task)
            this.task = {
                name: '',
                body: ''
            }
        }
    }
}

</script>

<style scoped>
.task_form_input{
    outline: none;
    border: 1px solid black;
    padding: 12px;
    min-width: 376px;
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.01);
}

.task_form{
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 600px;
    margin-right: auto;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0px 2px 16px rgba(0,0,0,0.06);
    margin-top: 40px;
}

.task_button{
    outline: none;
    padding: 8px;
    font-size: 24px;
    color: #ffffff;
    background-color: #0C0724;
    cursor: pointer;
    transition: all .3s ease-out;
}

.task_button:hover{
    color: #0C0724;
    background-color: #ffffff;
}
</style>