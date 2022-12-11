import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";

const ROOT = '/amit-portfolio';
const routes = [    
    {
        path: `${ROOT}/about`,
        name: "About",
        component: About,
    }, 
    {
        path: `${ROOT}/contact`,
        name: "Contact",
        component: Contact,
    },   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;