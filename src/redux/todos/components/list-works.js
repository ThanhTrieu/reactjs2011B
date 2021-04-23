import React from 'react';
import { Row, Col, List } from 'antd';

const data = [];

const ListWorks = () => {
  return (
    <Row style={{ margin: '20px 0px' }}>
      <Col span={12} offset={6}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  )
}
export default React.memo(ListWorks);