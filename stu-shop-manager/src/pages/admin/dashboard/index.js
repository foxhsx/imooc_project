import { Card, Col, Row, Statistic } from 'antd'
import React from 'react'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'

function Dashboard() {
  return (
    <div>
      <Card title="数据汇总" bordered={false}>
        <Row gutter={16}>
          <Col span={8}>
            <Card type="inner">
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card type="inner">
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card type="inner">
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </Card>
      <Card title="其他统计" bordered={false}></Card>
    </div>

  )
}

export default Dashboard