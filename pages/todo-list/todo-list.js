import Layout from "../../components/layout";
import TodoAppView from "../../components/todo-list/todo-list";
import TodoList from "../../lib/todo-list/todo-list";
import Container from "@material-ui/core/Container"

const testTodoList = new TodoList();

export default function TodoListPage({ todoList }) {
  return (
    <Layout>
      <Container>
      <TodoAppView todoList={ todoList || testTodoList } />
      </Container>
    </Layout>
  );
}
