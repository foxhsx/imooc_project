import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Card, message, Popconfirm, Space, Table } from 'antd'
import { useNavigate } from 'react-router-dom';
import { listApi, delOne, modifyOne } from '../../../service/api';
import { serverUrl } from '../../../utils';

const column = [
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
    title: '主图',
    dataIndex: 'coverImg',
    render: (value) => value
      ? <img src={serverUrl + value} alt="cover img" style={{ width: '120px' }} />
      : '暂无图片'
  },
  {
    title: '价格',
    dataIndex: 'price'
  },
  {
    title: '是否在售',
    dataIndex: 'onSale',
    render: (value) => value ? '在售' : '已下架'
  },
]

function List() {
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState([])
  const [total, setTotal] = useState(0);

  const loadData = useCallback((page) => {
    getData(page)
  }, [])

  const columns = useMemo(() => column.concat([{
    title: '操作',
    render: (text, record, index) => (
      <Space wrap>
        <Button type="primary" onClick={() => navigate(`/admin/products/edit/${record._id}`)}>修改</Button>
        <Popconfirm
          title="确认删除此项？"
          onCancel={() => console.log("用户取消删除")}
          onConfirm={() => delOne(record?._id).then(() => loadData(1))}
        >
          <Button type="primary" danger>删除</Button>
        </Popconfirm>
        <Button
          size="small"
          onClick={() => 
            modifyOne(record._id, { onSale: !record.onSale })
              .then(() => {
                message.success('更新成功')
                loadData(1)
              })
            }
        >
          { record.onSale ? '下架' : '上架' }
        </Button>
      </Space>
    )
  }]), [navigate, loadData])

  const getData = (page) => {
    listApi(page).then(res => {
      setDataSource(res.products)
      setTotal(res.totalCount)
    })
  }

  useEffect(() => {
    getData(1)
  }, [])

  return (
    <Card
      title="商品列表"
      extra={
        <Button type="primary" size="small" onClick={() => navigate('/admin/products/edit/')}>新增</Button>
      }
    >
      <Table
        columns={columns}
        bordered
        dataSource={dataSource}
        pagination={{
          total,
          defaultPageSize: 2,
          // onChange: loadData
        }}
      />
    </Card>
  )
}

export default List