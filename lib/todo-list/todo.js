import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

export default class Todo {
  id = uuid();
  title = "";
  finished = false;
  details = "";
  due = '';
  created = Date.Today;
  createdBy = '';
  showDetails = false;

  constructor(title, details, due, createdBy) {
    this.title = title || "";
    this.details = details || "";
    this.due = due || "";
    this.createdBy = createdBy || "";
    makeAutoObservable(this);
  }

  // Actions
  toggle() {
    this.finished = !this.finished;
  }

  toggleDetails(){
    this.showDetails = !this.showDetails;
  }
}
