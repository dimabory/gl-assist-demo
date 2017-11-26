import Vue from 'vue';
import Router from 'vue-router';
import Agenda from '@/components/Agenda';
import Telegram from '@/components/Telegram';
import Scene from '@/components/Scene';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Agenda',
      component: Agenda,
    },
    {
      path: '/tele',
      name: 'Telegram',
      component: Telegram,
    },
    {
      path: '/scene',
      name: 'Scene',
      component: Scene,
    },
  ],
});
