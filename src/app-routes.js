import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, TasksPage, ProfilePage,Example,Funda,Techno,Tablo,khodro } from './pages';

const routes = [
  {
    path: '/example/tasks',
    component: TasksPage
  },
  {
    path: '/tech',
    component: Techno
  },
  {
    path: '/funda',
    component: Funda
  },
  {
    path: '/tablo',
    component: Tablo
  },
  {
    path: '/example/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/example',
    component: Example
  },
  {
    path:'/khodro',
    component:khodro
  }

];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
