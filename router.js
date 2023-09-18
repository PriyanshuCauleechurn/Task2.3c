import { createRouter, createWebHistory } from 'vue-router';

import myHome from './components/HelloWorld.vue';

import SecondPage from './components/views/SecondPage';

const routes = [
    { path: '/', name: 'home', component: myHome},
    { path: '/SecondPage', name: 'SecondPage', component: SecondPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

