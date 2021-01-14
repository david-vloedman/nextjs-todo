import Layout from "../../components/layout";
import TodoListView from "../../components/todo-list/todo-list";
import TodoList from "../../lib/todo-list/todo-list";
import Todo from "../../lib/todo-list/todo";

const todoListObj = new TodoList();
const todoObj = new Todo();

export default function TodoListPage() {
  return (
    <Layout>
      <TodoListView todoList={todoListObj} todo={todoObj} />
    </Layout>
  );
}
