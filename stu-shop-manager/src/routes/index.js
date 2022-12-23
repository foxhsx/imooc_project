import Dashboard from '../pages/admin/dashboard'
import List from '../pages/admin/products/List'
import Login from '../pages/Login'
import Edit from '../pages/admin/products/Edit';
import PageNotFound from '../pages/PageNotFound';

export const mainRoutes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/404',
    element: <PageNotFound />
  }
]

export const adminRoutes = [
  {
    path: '/admin/dashboard',
    element: <Dashboard />
  },
  {
    path: '/admin/products',
    element: <List />
  },
  {
    path: '/admin/products/edit/:id',
    element: <Edit />
  }
]