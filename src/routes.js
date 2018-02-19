import Vue from 'vue';
import Router from 'vue-router';
import ContactData from './components/ContactData.vue';
import CreateContact from './components/CreateContact.vue';
import EditContact from './components/EditContact.vue';


Vue.use(Router);


const router = new Router({
  routes: [
     { path: '/', component: ContactData , name: 'ContactData' },
     { path: '/addcontacts', component: CreateContact , name: 'CreateContact' },
     { path: '/contacts/:id/edit', component: EditContact, name: 'EditContact' }
  ],
  mode: 'history'
});

export default router;


