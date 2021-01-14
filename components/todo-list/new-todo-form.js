import { observer } from "mobx-react-lite";
import Todo from "../../lib/todo-list/todo";
import styled from "styled-components";
import { observable, action } from "mobx";


// look for examples of other forms using mobx
export default function AddNewTodoForm({ todoList }) {
  const form = observable({
    title: "",
    details: "",
    createdBy: "",
    due: "",
    updateProperty: action((key, value) => (form[key] = value)),
    addToList: action(() => {
      const todo = new Todo(form.title, form.details, form.due, form.createdBy);
      todoList.addTodoItem(todo);
    })
  });

  return (
    <FormContainer>
      <FormElement todoList={todoList} formState={form} />
    </FormContainer>
  );
}

const FormElement = observer(({ formState }) => {
  const onChange = (event) => {
    formState.updateProperty(event.target.name, event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    formState.addToList();
  };

  return (
    <fieldset>
      <legend>Create new task</legend>
      <form>
        <InputGroup>
        <label>
          Title <br />
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={(e) => onChange(e)}
          />
        </label>
        </InputGroup>
        <br />
        <InputGroup>
        <label>
          Details <br />
          <input
            type="text"
            name="details"
            value={formState.details}
            onChange={(e) => onChange(e)}
          />
        </label>
        </InputGroup>
        <br/>

        <InputGroup>
        <label>
          Created By <br />
          <input
            type="text"
            name="createdBy"
            value={formState.createdBy}
            onChange={(e) => onChange(e)}
          />
        </label>
        </InputGroup>
        <br/>
        <InputGroup>
        <label>
          Due By <br />
          <input
            type="text"
            name="due"
            value={formState.due}
            onChange={(e) => onChange(e)}
          />
        </label>
        </InputGroup>
        <br />
        <SubmitButton type="submit" onClick={onSubmit} onSubmit={onSubmit}>
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

const InputGroup = styled.div`
  margin: 2px;
`;
