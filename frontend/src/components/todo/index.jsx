import React, { useContext } from "react";
import { List, Checkbox, Button } from "antd";
import TodosDispatch from "../../store/provider";
import { setTodoAsDone, setTodoAsUndone, remove } from "../../store/actions";

export default (props) => {
  const dispatch = useContext(TodosDispatch);

  const {
    todo: { id, todo, done }
  } = props;

  const handleStatus = (e) => {
    if (e.target.checked === true) {
      return dispatch(setTodoAsDone(id));
    }
    return dispatch(setTodoAsUndone(id));
  };

  const handleRemove = () => {
    dispatch(remove(id));
  };

  return (
    <List.Item
      data-item={id}
      className={done ? "done" : null}
      actions={[
        <Button
          type="danger"
          icon="delete"
          onClick={handleRemove}
        />
      ]}
    >
      <List.Item.Meta
        title={todo}
        avatar={<Checkbox
          checked={done}
          onChange={handleStatus}
        />}
      />
    </List.Item>
  );
}
