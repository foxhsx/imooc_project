import React, { useCallback, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input, message } from 'antd';
import './styles/login.css'
import { setToken } from '../utils';
import { useNavigate } from 'react-router-dom';
import { loginApi, register } from '../service/api';

const Login = () => {
  const [type, setType] = useState('login')
  const navigate = useNavigate();
  
  const onFinish = useCallback((values) => {
    const request = type === 'login' ? loginApi({
      username: values.username,
      password: values.password,
    }) : register({
      username: values.username,
      password: values.password
    });

    request.then(res => {
      if (res.code === 'success') {
        message.success('登录成功')
        setToken(res.token || 'sdhajfkdsjkoi');
        navigate('/')
      } else {
        message.info(res.message || '出错了')
      }
    }).catch(error => {
      message.error(error.message || '用户不存在')
    })
  }, [navigate, type]);
  

  return (
    <Card title="QF Admin SYS" className="login-form">
      <Form
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          {
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            type === 'login' ? <a onClick={() => setType('reg')}>去注册</a> : <a onClick={() => setType('login')}>去登录</a>
          }
        </Form.Item>

        <Form.Item>
          {
            type === 'login' ? <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button> : <Button htmlType="submit">注册</Button>
          }
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
