import React, { useContext } from 'react';
import TodoItem from '../../components/todo';
import TodoForm from '../../components/todoForm';
import TodosDispatch from '../../store/provider';
import { changeView } from '../../store/actions';
import { List, Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export default (props) => {
  const dispatch = useContext(TodosDispatch);
  const { todos } = props;

  const handleTabChange = value => {
    dispatch(changeView(value));
  };

  return (
    <>
      <TodoForm />
      <br />
      <Tabs defaultActiveKey='all' onChange={handleTabChange}>
        <TabPane tab='All' key='all' />
        <TabPane tab='Done' key='done' />
        <TabPane
          tab='Pending'
          key='pending'
        />
      </Tabs>
      <List
        className='ul__todos'
        itemLayout='horizontal'
        bordered={true}
        dataSource={todos}
        renderItem={(todo, index) => (
          <TodoItem todo={todo} id={index} key={`todo_${index}`} />
        )}
        locale={{ emptyText: 'No to-dos found.' }}
      />
    </>
  );
};
