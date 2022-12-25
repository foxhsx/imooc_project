import { Button, Card, Form, Input } from 'antd'
import React from 'react'

function Edit() {
  return (
    <Card title="商品编辑">
      <Form>
        <Form.Item label="名字">
          <Input placeholder="请输入商品名字" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">保存</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Edit