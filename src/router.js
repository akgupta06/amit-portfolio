import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Experience from "@/views/Experience.vue";

const ROOT = '/amit-portfolio';
const routes = [   
    {
        path: `${ROOT}/home`,
        alias: [`${ROOT}/`, `/`],
        name: "Home",
        component: Home,
    }, 
    {
        path: `${ROOT}/about`,
        name: "About",
        component: About,
    },
    {
        path: `${ROOT}/experience`,
        name: "Experience",
        component: Experience,
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