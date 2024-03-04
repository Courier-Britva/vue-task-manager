<template>
        <div>
            <ul class="task_list">
                <li class="task" v-for="task in tasks">
                    <span class="task_name">
                        {{ task.name }}
                    </span>
                    <p class="task_body">
                        {{ task.body }}
                    </p>
                    <button 
                        class="task_delete_button"
                        @click="$emit('remove', task)"
                    >
                        <img 
                            src="@/img/delete-button.svg"   
                            alt="del"
                            class="task_delete_img"    
                        >
                    </button>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
    props: {
        tasks: {
            type: Array,
            required: true
        }
    }
}

</script>

<style scoped>
.task_list{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 60px;
    margin-bottom: 120px;
}

.task{
    width: 100%;
    border-radius: 12px;
    box-shadow: 0px 2px 16px rgba(0,0,0,0.06);
    min-height: 75px;
    padding: 12px;
    background-color: #f7f6f6;
    position: relative;
}

.task_name{
    display: block;
    font-weight: 600;
    font-size: 24px;
    border-bottom: 1px solid #000;
    padding-bottom: 12px;
    margin-bottom: 24px;
}

.task_delete_button{
    position: absolute;
    z-index: 2;
    top: 12px;
    right: 12px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease; 
}

@keyframes shake {
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-2px);
  }
  75% {
    transform: translateY(2px);
  }
}

.task_delete_button:hover {
  animation: shake 0.3s ease;
}

.task_delete_img{
    width: 30px;
    background-color: #f7f6f6;
}
</style>