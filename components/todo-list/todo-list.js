import { observer } from "mobx-react-lite";
import styled from "styled-components";
import NewTodoForm from "./new-todo-form";

export default function TodoListView({ todoList }) {
  return (
    <TodoContainer>
      <ListContainer>
        <TodoListElement>
          <ListView todoList={todoList} />
        </TodoListElement>
      </ListContainer>
      <CountersContainer>
        <UnfinishedCount todoList={todoList} />
        <FinishedCount todoList={todoList} />
      </CountersContainer>
      <NewTodoForm todoList={todoList} />
    </TodoContainer>
  );
}

const ListView = observer(({ todoList }) => (
  <>
    {todoList.todos.map((todo) => (
      <TodoView todo={todo} key={todo.id} />
    ))}
  </>
));

const TodoView = observer(({ todo }) => (
  <TodoLI>
    <input
      type="checkbox"
      checked={todo.finished}
      onChange={() => todo.toggle()}
    />{" "}
    {todo.title} - Details: {todo.details}
  </TodoLI>
));

const UnfinishedCount = observer(({ todoList }) => (
  <CountContainer>
    Uncompleted tasks: {todoList.unfinishedTodoCount}
  </CountContainer>
));

const FinishedCount = observer(({ todoList }) => (
  <CountContainer>Completed tasks: {todoList.finishedTodoCount}</CountContainer>
));

const TodoLI = styled.li`
  padding: 3px;
  margin: 3px;
`;

const ListContainer = styled.div`
  max-width: 300px;
  margin: 5px;
`;

const TodoContainer = styled.div``;

const TodoListElement = styled.ul`
  list-style: none;
`;

const CountContainer = styled.div`
  margin: 5px;
  padding: 3px;
  border-top: 1px solid #333;
`;

const CountersContainer = styled.div`
  margin: 5px;
  padding: 3px;
  max-width: 300px;
`;
