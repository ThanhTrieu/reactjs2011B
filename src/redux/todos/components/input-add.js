import React from 'react';
import { Row, Col, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addWork } from '../actions/index';

const { Search } = Input;

const InputAdd = () => {
  const id = useSelector(state => state.todo.idTodo);
  const dispatch = useDispatch();
  return (
    <Row style={{ margin: '30px 0px' }}>
      <Col span={12} offset={6}>
        <Search
          placeholder="name of work ... "
          allowClear
          enterButton="Add"
          size="large"
          onSearch={val => dispatch(addWork(val, id))}
        />
      </Col>
    </Row>
  )
}
export default React.memo(InputAdd);