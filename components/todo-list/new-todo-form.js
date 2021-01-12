import { observer } from "mobx-react-lite";
import Todo, { todo } from '../../lib/todo-list/todo';

export default function AddNewTodoForm({ todoList }) {
  return <FormElement todoList={ todoList }/>;
}

const FormElement = observer(({ todoList }) =>
    {

        let todo = new Todo()

        const updateProperty = (key,value) => todo[key] = value

        const onChange = (event) => updateProperty(event.target.name, event.target.value)

        const onSubmit = (event) => {
            event.preventDefault()
            todoList.addTodoItem(todo)
            todo = new Todo()
        }

        return (
        <form>
            <h2>Create new task</h2>
            <label>
                Title
                <input type="text" name="title" onChange={ onChange }/>
            </label>

            <label>
                Details
                <input type="text" name="details" onChange={ onChange }/>
            </label>

            <input type="Submit" onClick={ onSubmit }/>
        </form>
        )
    }
 );



//   updateProperty(key, value) {
//     this.todo[key] = value;
//   }

//   onChange(event) {
//     this.updateProperty(event.target.name, event.target.value);
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Todo:
//           <input
//             type="text"
//             name="message"
//             value={ todo.message }
//             onChange={ this.onChange }
//           />
//         </label>
//       </form>
//     );
//   }
// }
