import Layout from "../../components/layout";
import TodoAppView from "../../components/todo-list/todo-list";
import TodoList from "../../lib/todo-list/todo-list";

const testTodoList = new TodoList();

export default function TodoListPage({ todoList }) {
  return (
    <Layout>
      <TodoAppView todoList={ todoList || testTodoList } />
    </Layout>
  );
}
