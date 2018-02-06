// import { Route } from 'react-router';
import Login from '../views/login';
import Menu from '../components/panel-left-menu';
import ControlPanel from '../views/control-panel';
import PublishProduct from '../views/publish-product';
import ManageProduct from '../views/manage-product';
const routes = {
  path: '/',
  indexRoute: { component: Login },
  childRoutes: [
    {
      path: 'pmt',
      component: Menu,
      childRoutes: [
        {
          path: 'control-panel',
          component: ControlPanel
        },
        {
          path: 'publish-product',
          component: PublishProduct
        },
        {
          path: 'manage-product',
          component: ManageProduct
        }
      ]
    }
  ]
}

export default routes;
