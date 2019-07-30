import React, { useContext, useState } from 'react';
import { Input, Button, Row, Col } from 'antd';
import TodosDispatch from '../../store/provider';
import { add } from '../../store/actions';

export default () => {
  const dispatch = useContext(TodosDispatch);
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(add(value));
    setValue('');
  };

  return (
    <Row>
      <Col span={24}>
        <Input value={value} onChange={handleChange} style={{ width: '80%' }} />
        <Button
          onClick={handleSubmit}
          style={{ width: '18%', marginLeft: '2%' }}
          type='primary'
        >
          Add
        </Button>
      </Col>
    </Row>
  );
}
