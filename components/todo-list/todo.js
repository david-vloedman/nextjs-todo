export default function Todo({ todo }){
  
}

const TodoView = observer(({todo}) => (
  <li>
      <input type="checkbox" checked={todo.finished} onChange={() => todo.toggle()} />
       {' '}
       { todo.title }
       {' '}
       - Details: { todo.details }
  </li>
))

