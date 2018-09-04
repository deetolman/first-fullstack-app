import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Dogs from './components/dogs/Dogs.vue';
import AddDog from './components/dogs/AddDog.vue';


export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/dogs', component: Dogs },
    { path: '/dogs/add', component: AddDog },
    { path: '*', redirect: '/' }
  ]
});