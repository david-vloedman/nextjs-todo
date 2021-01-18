import { observer } from "mobx-react-lite";
import styled from "styled-components";
import AddTaskForm from "./new-todo-form";
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

export default function TodoAppView({ todoList }) {
  return (
    <ComponentContainer>

      <ListContainer>
        <TodoListUL>
          <TodoListView todoList={todoList} />
        </TodoListUL>
      </ListContainer>

      <CountersContainer>
        <UnfinishedCountView todoList={todoList} />
        <FinishedCountView todoList={todoList} />
      </CountersContainer>

      <AddTaskForm todoList={todoList} />

      <TodoDetailsContainer>
          {todoList.todos.map((todo) =>
           todo.showDetails ? <TodoDetailView todo={todo} /> : null)}
      </TodoDetailsContainer>
    </ComponentContainer>
  );
}

const TodoListView = observer(({ todoList }) => (
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
    {todo.title} 
    <Button
     variant="contained"
     color="primary" 
     type="button">Details</Button>
  </TodoLI>
));

const TodoDetailView = observer(({todo}) => (
  <div>
    <Typography variant="h5" component="h4" gutterBottom>{ todo.title }</Typography>
    <Typography variant="subtitle1" gutterBottom>Created by: {todo.createdBy}</Typography>
    <Typography variant="subtitle1" gutterBottom>Due by: {todo.due}</Typography>
    <Typography variant="body1">{todo.details}</Typography>
  </div>
))



const UnfinishedCountView = observer(({ todoList }) => (
  <CountContainer>
    Uncompleted tasks: {todoList.unfinishedTodoCount}
  </CountContainer>
));

const FinishedCountView = observer(({ todoList }) => (
  <CountContainer>
    Completed tasks: {todoList.finishedTodoCount}
  </CountContainer>
));

const TodoLI = styled.li`
  padding: 3px;
  margin: 3px;
`;

const ListContainer = styled.div`
  max-width: 300px;
  margin: 5px;
`;

const ComponentContainer = styled.div`

`;

const TodoListUL = styled.ul`
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

const TodoDetailsContainer = styled.div``;