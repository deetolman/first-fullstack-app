import VueRouter from 'vue-router';
import Home from './components/home/home.vue';
import Dogs from './components/dogs/Dogs.vue';
import AddDog from './components/dogs/AddDog.vue';
import DogDetail from './components/dogs/DogDetail.vue';


export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/dogs', component: Dogs },
    { path: '/dogs/add', component: AddDog },
    { path: '/dogs/:id', component: DogDetail },
    { path: '*', redirect: '/' }
  ]
});