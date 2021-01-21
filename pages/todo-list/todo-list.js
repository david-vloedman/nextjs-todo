import TodoAppView from "../../components/todo-list/todo-list"
import Layout from "../../components/layout"
import TodoList from "../../lib/todo-list/todo-list"


export default function TodoListPage(){
  const testList = new TodoList();
  
  return (
    <Layout>
    <TodoAppView todoList={testList}/>
    </Layout>
  )
}