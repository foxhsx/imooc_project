import { Button, Card, Form, Input } from 'antd'
import React from 'react'

function Edit() {
  const handleSubmit = (value) => {
    console.log(value)
  }

  const priceValidate = (rule, value) => {
    if (isNaN(parseFloat(value))) {
      return Promise.reject(new Error('请输入数字'))
    } else {
      return Promise.resolve()
    }
  }
  return (
    <Card title="商品编辑">
      <Form onFinish={handleSubmit}>
        <Form.Item label="名字" name="product_name" rules={[{ required: true, message: '请输入商品名称' }]}>
          <Input placeholder="请输入商品名字" />
        </Form.Item>
        <Form.Item label="价格" name="product_price" rules={[
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