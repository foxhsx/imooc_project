import Dashboard from '../pages/admin/dashboard'
import List from '../pages/admin/products/List'
import Login from '../pages/Login'
import Edit from '../pages/admin/products/Edit';
import PageNotFound from '../pages/PageNotFound';
import App from '../App';
import { Navigate } from 'react-router-dom';
import Notices from '../pages/admin/notices';

export const mainRoutes = [
  {
    path: '/',
    navigate: '/admin/',
    element: <Navigate to="/admin/" replace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]

export const adminRoutes = [
  {
    path: '/admin/',
    element: <App />,
    isShow: true,
    label: '后台管理',
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
        label: '看板',
        isShow: true,
        icon: 'AreaChartOutlined'
      },
      {
        path: 'products',
        element: <List />,
        label: '商品管理',
        isShow: true,
        icon: 'ShopOutlined'
      },
      {
        // id 为可选参数，携带表示编辑，反之为新增
        path: 'products/edit/:id?',
        element: <Edit />,
        label: '编辑详情',
        isShow: false,
      },
      {
        path: 'notices',
        element: <Notices />,
        label: '通知中心',
        isShow: true,
        icon: "BellOutlined"
      }
    ]
  },
]