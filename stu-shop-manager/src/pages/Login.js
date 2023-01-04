import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input, message, Space } from 'antd';
import './styles/login.css'
import { setToken } from '../utils';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../service/api';

const Login = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    loginApi({
      username: values.username,
      password: values.password,
    }).then(res => {
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
  };
  const register = () => {
    console.log(form.getFieldsValue());
  }

  return (
    <Card title="QF Admin SYS" className="login-form">
      <Form
        name="normal_login"
        form={form}    
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
        </Form.Item>

        <Form.Item>
          <Space wrap>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            <Button onClick={register}>注册</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
