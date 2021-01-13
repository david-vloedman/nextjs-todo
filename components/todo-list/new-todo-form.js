import { action } from "mobx";
import { observer } from "mobx-react-lite";
import Todo from "../../lib/todo-list/todo";
import styled from "styled-components";

export default function AddNewTodoForm({ todoList }) {
  return <FormElement todoList={todoList} />;
}

let todo = new Todo();

const FormElement = observer(({ todoList }) => {
  const updateProperty = action((key, value) => {
    todo[key] = value;
  });

  const onChange = action((event) => {
    updateProperty(event.target.name, event.target.value);
  });

  const onSubmit = (event) => {
    event.preventDefault();
    todoList.addTodoItem(todo);
  };

  return (
    <FormContainer>
      <fieldset>
        <legend>Create new task</legend>
        <form>
          <label>
            Title <br />
            <input
              type="text"
              name="title"
              onChange={action((e) => onChange(e))}
            />
          </label>
          <br />
          <label>
            Details <br />
            <input type="text" name="details" onChange={onChange} />
          </label>
          <br />
          <SubmitButton type="Submit" onClick={onSubmit} value="Add Task" />
        </form>
      </fieldset>
    </FormContainer>
  );
});

const FormContainer = styled.div`
  max-width: 300px;
  margin: 5px;
`;

const SubmitButton = styled.input`
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    margin-bottom: 5px;
`;
