import React from 'react';
import { Dropdown, Layout, Menu, theme } from 'antd';
import { adminRoutes } from '../../routes';
import { generatorRoutes, clearToken } from '../../utils';
import { Link, useNavigate } from 'react-router-dom';
import { CaretDownOutlined } from '@ant-design/icons'
import './index.css'

const { Header, Content, Sider } = Layout;

const popMenu = [{
  key: 'notion',
  label: (<Link>通知中心</Link>),
},{
  key: 'setting',
  label: (<Link>设置</Link>),
},{
  key: 'logout',
  label: (<Link>退出</Link>),
}]

const Frame = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate()
  const routes = generatorRoutes(adminRoutes)

  const logout = ({ key }) => {
    console.log(key);
    if (key === 'logout') {
      clearToken()
      navigate('/login')
    }
  }

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <img src="http://www.mobiletrain.org/images/index/new_logo.png" alt='logo' />
        </div>
        <Dropdown menu={{ items: popMenu, onClick: logout }}>
          <div style={{ color: '#fff' }}>
            <span >超级管理员</span>
            <CaretDownOutlined  />
          </div>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['/admin/']}
            defaultOpenKeys={['/admin/']}
            style={{ height: '100%', borderRight: 0 }}
            items={routes}
            onClick={({ keyPath }) => navigate(keyPath.reverse().join(''))}
          />
        </Sider>
        <Layout style={{ padding: '16px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Frame;
