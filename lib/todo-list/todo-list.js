import {makeObservable, observable, computed} from "mobx"
import Todo from '../todo-list/todo'

export default class ToDoList{
    // master list of 'todos'
    todos = []

    /**
     *  Return all 'todos' that are marked as not finished
     */
    get unfinishedTodoCount(){
        return this.todos.filter(todo => !todo.finished).length;
    }

    /**
     *  Initialize state with any existing 'todos'
     *  Setup MobX
     * @param {Array<Todo>} todos 
     */
    constructor(todos){
        makeObservable(this, {
            todos: observable,
            unfinishedTodoCount: computed
        })

        this.todos = todos;
    }
}



