import VueRouter from 'vue-router'


import Contact from './components/Contact';
import Home from './Home.vue';
import Category from './Category.vue';
import Product from './Product.vue';



const routes = [
  {
  path: '/',
  name: 'home',
  component: Home
 },
  {
  path: '/contato',
  name: 'contato',
  component: Contact 
},
{
  path: '/categoria/:name',
  name: 'category',
  component: Category
},
{
  path: '/produto/:name',
  name: 'product',
  component: Product
}
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
});


export default router