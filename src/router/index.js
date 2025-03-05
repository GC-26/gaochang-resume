import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Education from '../views/Education.vue';
import Experience from '../views/Experience.vue';
import SelfEvaluation from '../views/SelfEvaluation.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/education', component: Education },
  { path: '/experience', component: Experience },
  { path: '/self-evaluation', component: SelfEvaluation },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;