import Main from '@/pages/Main.vue'
import Tasks from '@/pages/Tasks.vue'
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/tasks',
        component: Tasks
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;