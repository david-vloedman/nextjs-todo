import {makeObservable, observable, computed, action } from 'mobx'

export default class Todo{
    id = Math.random()
    finished = false
    message = ""

    constructor(message){
        this.message = message
        makeObservable(this, {
            finished: observable,
            title: observable,
            toggle: action
        })
    }

    // Actions
    toggle(){
        this.finished = !this.finished
    }
}