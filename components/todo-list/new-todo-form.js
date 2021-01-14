import { observer } from "mobx-react-lite";
import Todo from "../../lib/todo-list/todo";
import styled from "styled-components";
import { observable, action } from "mobx";

export default function AddNewTodoForm({ todoList, formState }) {
  const form = observable({
    title: "",
    details: "",
    createdBy: "",
    due: "",
    updateProperty: action((key, value) => (form[key] = value)),
  });

  return (
    <FormContainer>
      <FormElement todoList={todoList} formState={form} />
    </FormContainer>
  );
}
// todo: this is sloppy, it shouldn't need both the todolist and formstate.
// come up with a better solution for forms w/ mobx
const FormElement = observer(({ todoList, formState }) => {
  const onChange = (event) => {
    formState.updateProperty(event.target.name, event.target.value);
  };

  const onSubmit = (event) => {
    const todo = new Todo();
    todo.title = formState.title;
    todo.details = formState.details;
    todoList.addTodoItem(todo);
    event.preventDefault();
  };

  return (
    <fieldset>
      <legend>Create new task</legend>
      <form>
        <label>
          Title <br />
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={(e) => onChange(e)}
          />
        </label>
        <br />
        <label>
          Details <br />
          <input
            type="text"
            name="details"
            value={formState.details}
            onChange={(e) => onChange(e)}
          />
        </label>
        <br/>
        <label>
          Created By <br />
          <input
            type="text"
            name="createdBy"
            value={formState.createdBy}
            onChange={(e) => onChange(e)}
          />
        </label>

        <br/>
        <label>
          Due By <br />
          <input
            type="text"
            name="due"
            value={formState.due}
            onChange={(e) => onChange(e)}
          />
        </label>

        <br />
        <SubmitButton type="submit" onClick={onSubmit}>
          Add Task
        </SubmitButton>
      </form>
    </fieldset>
  );
});

const FormContainer = styled.div`
  max-width: 300px;
  margin: 5px;
`;

const SubmitButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 5px;
`;
