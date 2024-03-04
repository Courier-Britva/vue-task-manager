<template>
    <div class="content">
        <div class="head">
            <span class="head_text head_text_first">
                Plan.
            </span>
            <span class="head_text head_text_second">
                Organize.
            </span>
            <span class="head_text head_text_third"> 
                Do.
            </span>
        </div>
        <div class="steps">
            <div class="step">
                <span class="step_count">
                    1
                </span>
                <p class="step_details">
                    Open your personal list of tasks and manage it
                </p>
            </div>
            <div class="step">
                <span class="step_count">
                    2
                </span>
                <p class="step_details">
                    Organize it in way you like
                </p>
            </div>
            <div class="step">
                <span class="step_count">
                    3
                </span>
                <p class="step_details">
                    Delete its when its done!
                </p>
            </div>
        </div>

        <router-link 
            to="/tasks"
            class="tasks_link"
        >
            Tasks
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.head{
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 468px;
    margin-left: auto;
    margin-right: auto;
}

.content{
    padding-top: 120px;
}

.head_text{
    font-size: 48px;
    font-weight: 700;
    animation-name: textAppear;
    animation-duration: 0.5s;
    transform: translateX(600px);
    opacity: 0;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
}

.tasks_link{
    margin-bottom: 120px;
    background-color: #000000;
    color: #ffffff;
    text-decoration: none;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: fit-content;
    padding: 12px 36px;
    border-radius: 12px;
    font-size: 36px;
    border: 1px solid #000000;
    transition: all .3s ease-out;
}

.tasks_link:hover{
    background-color: #ffffff;
    color: #000000;
}

@keyframes textAppear {
  0% {
    transform: translateX(600px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
.head_text_first{
    animation-delay: 0.3s;
}

.head_text_second{
    animation-delay: 0.4s;
}

.head_text_third{
    animation-delay: 0.5s;
}

.steps{
    display: flex;
    justify-content: space-between;
    margin-top: 120px;
    gap: 36px;
    margin-bottom: 120px;
}

.step{
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;    
    width: 100%;
    border-radius: 12px;
    box-shadow: 0px 2px 16px rgba(0,0,0,0.06);
    min-height: 75px;
    padding: 12px;
    background-color: #f7f6f6;
}

@media(max-width: 768px){
    .content{
        margin-top: 60px;
    }
    
    .head_text{
        font-size: 36px;
        font-weight: 600;
    }

    .head{
        max-width: 340px;
    }

    .steps{
        flex-direction: column;
    }
}
</style>