import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, TasksPage, ProfilePage,Example } from './pages';

const routes = [
  {
    path: '/example/tasks',
    component: TasksPage
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
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
