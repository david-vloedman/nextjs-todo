import { observer } from "mobx-react-lite";
import { observable, action } from "mobx";
import Todo from "../../lib/todo-list/todo";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";

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
    }),
  });

  return (
    <FormContainer>

      <div>
        <Typography variant="h5" component="h5">Create new task</Typography>
        </div>
      <br/>
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
    <div>
      <h2>Create new task</h2>
      <form noValidate>
        <div>
          <TextField
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            value={formState.title}
            onChange={(e) => onChange(e)}
          />
       </div>
        <br />
        <div>
          <TextField
            name="details"
            variant="outlined"
            label="Details"
            value={formState.details}
            onChange={(e) => onChange(e)}
          />
        </div>
        <br/>
        <div>
          <TextField
            name="createdBy"
            variant="outlined"
            label="Created By"
            value={formState.createdBy}
            onChange={(e) => onChange(e)}
          />
        </div>
        <br/>
        <div>
          <TextField
            type="date"
            name="due"
            label="Due By"
            variant="outlined"
            value={formState.due}
            onChange={(e) => onChange(e)}
            InputLabelProps={{
              shrink: true,
            }}
          />
      </div>
      <br />
      <SubmitContainer>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={onSubmit}
          onSubmit={onSubmit}
        >
          Add Task
        </Button>
        </SubmitContainer>
      </form>
    </div>
  );
});

const FormContainer = styled.div`
  max-width: 300px;
  margin: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;

`;



const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
`;
