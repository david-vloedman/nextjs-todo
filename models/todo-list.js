import {makeObservable, observable, computed} from "mobx"

export default class ToDoList{
    todos = []
    get unfinishedTodoCount(){
        return this.todos.filter(todo => !todo.finished).length;
    }

    constructor(todos){
        makeObservable(this, {
            todos: observable,
            unfinishedTodoCount: computed
        })

        this.todos = todos;
    }
}



