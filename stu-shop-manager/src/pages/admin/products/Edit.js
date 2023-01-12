import { Button, Card, Form, Input, message } from 'antd'
import React, { useEffect } from 'react'
import { createApi, getOneId, modifyOne } from '../../../service/api'
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const nagivate = useNavigate();
  const params = useParams();
  const [form] = Form.useForm();

  const back = () => nagivate('/admin/products')
  const handleSubmit = (value) => {
    let request = () => createApi(value);
    let successTips = '添加成功'
    if (params?.id) {
      request = () => modifyOne(params.id, value);
      successTips = '更新成功'
    }
    request().then(res => {
      back();
      message.success(successTips)
    })
  }

  const priceValidate = (rule, value) => {
    if (isNaN(parseFloat(value))) {
      return Promise.reject(new Error('请输入数字'))
    } else {
      return Promise.resolve()
    }
  }

  useEffect(() => {
    if (params?.id) {
      getOneId(params.id).then(({ name, price }) => {
        form.setFieldsValue({ name, price })
      })
    }
  }, [params, form])

  return (
    <Card title="商品编辑" extra={<Button onClick={back}>返回</Button>}>
      <Form onFinish={handleSubmit} form={form}>
        <Form.Item
          label="名字" name="name" rules={[{ required: true, message: '请输入商品名称' }]}
        >
          <Input placeholder="请输入商品名字" />
        </Form.Item>
        <Form.Item label="价格" name="price" rules={[
          { required: true, message: '请输入商品价格' },
          { validator: priceValidate }
          ]}>
          <Input placeholder="请输入商品价格" />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' type="primary">保存</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Edit