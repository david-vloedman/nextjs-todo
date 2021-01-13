import {makeObservable, observable, action } from 'mobx'
import {v4 as uuid } from "uuid"

export default class Todo { 
    id = uuid()
    title = ''
    finished = false
    details = ''

    constructor(){
        makeObservable(this, {
            finished: observable,
            title: observable,
            details: observable,
            toggle: action
        })
        
    }

   
    // Actions
    toggle(){
        this.finished = !this.finished
    }
}