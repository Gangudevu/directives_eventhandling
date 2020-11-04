import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  // todoList contains all todos
  todoText: string = "";
  todoId:string= "";
  isTodoListEmpty = false;
  todoList: Todo[];

  
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }


  ngOnInit() {
    this.isTodoListEmpty=true;
  }
  // write logic to the onAddTodo method is to add a new todo to list
  // get maximum id in list and assign maximum id plus one while adding a todo
  onAddTodo(todoText: any) {
    if (this.todoText!=""){
      console.log("adding the todoText - ", this.todoText);
      let todoObj = {todoId: this.todoList.length, text: this.todoText, isCompleted: false, buttonText:"Done"};

      this.todoList.push(todoObj);
      this.todoText = "";
      this.isTodoListEmpty=false;  
    }
    
  }

  // write logic to the onClearTodos method to delete the all todos in the todoList
  onClearTodos() {
    console.log("clearing the todoList - ", this.todoList);
    this.todoList=[];
    this.todoText="";
    this.isTodoListEmpty=true;
  }

  // write logic to method onCompletingTask, to mark todo as as completed or not
  onCompletingTodo(todo: Todo) {
    if (this.todoList[this.todoId].isCompleted){
      this.todoList[this.todoId].isCompleted = false;
      this.todoList[this.todoId].buttonText = "Done";
    }else{
      this.todoList[this.todoId].isCompleted = true;
      this.todoList[this.todoId].buttonText = "Undone";
    }
  }
    
  
  

  // write logic to method onDeletingTask, to delete the todo
  onDeletingTodo(todoId) {
      this.todoList = this.todoList.filter((todo)=> todo.todoId != todoId);
    }
  }

