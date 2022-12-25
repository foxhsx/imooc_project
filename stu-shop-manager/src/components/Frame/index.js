import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { adminRoutes } from '../../routes';
import { generatorRoutes } from '../../utils';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const Frame = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate()
  const routes = generatorRoutes(adminRoutes)

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <img src="http://www.mobiletrain.org/images/index/new_logo.png" alt='logo' />
        </div>
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
