import { createRouter,createWebHistory } from "vue-router";
import FormSubmit from "@/components/FormSubmit.vue";
import Thanks from "@/components/Thanks.vue";

const routes = [
    { path: '/', name: 'FormSubmit', component: FormSubmit },
    { path: '/thanks', name: 'Thanks', component: Thanks },
]

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router