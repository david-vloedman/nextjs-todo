import { observer } from 'mobx'
import { TodoList } from '../../lib/todo-list/todo-list'

export default function(){
    const TodoListView = observer(({todoList}) => (
        <div>
            <ul>
                {todoList.todos.map(todo => {
                    <TodoView todo={todo} key={todo.id}  />
                })}
            </ul>
        </div>
    ))

    const TodoView = observer(({todo}) => (
        <li>
            <input type="checkbox"
             checked={todo.finished} 
             onClick={() => todo.toggle()} 
             />
             {todo.message}
        </li>
    ))

    return (
        <TodoListView />
    )
}

