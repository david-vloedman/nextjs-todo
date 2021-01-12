import Layout from '../../components/layout'
import TodoListView from '../../components/todo-list/todo-list-view'
import TodoList from '../../lib/todo-list/todo-list'
import Todo from '../../lib/todo-list/todo'

const todoListObj = new TodoList()

export default function TodoListPage(){
    return (
        
        <Layout>
            <TodoListView todoList={todoListObj} />
        </Layout>
    )
}



console.log(todoListObj)