import React from 'react'
import { Button, Card, Popconfirm, Space, Table } from 'antd'
import { useNavigate } from 'react-router-dom';

const columns = [
  {
    title: '序号',
    key: 'id',
    with: 80,
    align: 'center',
    render: (text, record, index) => index + 1
  },
  {
    title: '商品名称',
    dataIndex: 'name'
  },
  {
    title: '价格',
    dataIndex: 'price'
  },
  {
    title: '操作',
    render: (text, record, index) => (
      <Space wrap>
        <Button type="primary">修改</Button>
        <Popconfirm
          title="确认删除此项？"
          onCancel={() => console.log("用户取消删除")}
          onConfirm={() => console.log("用户确认删除")}
        >
          <Button type="primary" danger>删除</Button>
        </Popconfirm>
      </Space>
    )
  }
]

const dataSource = [
  {
    id: 1,
    name: '香皂',
    price: 5,
  },
  {
    id: 2,
    name: '特仑苏',
    price: 6,
  },
  {
    id: 3,
    name: '小浣熊',
    price: 1.5,
  }
]

function List() {
  const navigate = useNavigate()
  return (
    <Card
      title="商品列表"
      extra={
        <Button type="primary" size="small" onClick={() => navigate('/admin/products/edit/')}>新增</Button>
      }
    >
      <Table columns={columns} bordered dataSource={dataSource} />
    </Card>
  )
}

export default List