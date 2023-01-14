import { Button, Card, List } from 'antd'
import React from 'react'
import { connect } from 'react-redux'

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

function Notices(props) {
  return (
    <Card title="通知中心" extra={
      <Button onClick={() => props.dispatch({
        type: 'READ_ALL'
      })}>全部已读</Button>
    }>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <Button>已读</Button>
          </List.Item>
        )}
      />
    </Card>
  )
}

export default connect(state => state.notices)(Notices);