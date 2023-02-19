import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
export class Todo {
  constructor(public id: number, public description: String, public done: boolean, public targetDate: Date) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  // todo = {
  //   id: 1,
  //   description : 'Learn to Dance'
  // }
  todos: Todo[] = [];
  message!: String;
  // = [
  // new Todo(1, 'Learn Cloud Computing', false, new Date()),
  // new Todo(2, 'Learn Dev Ops', false, new Date()),
  // new Todo(3, 'Learn AWS', false, new Date())
  // { id: 1, description: 'Learn AWS' },
  // { id: 2, description: 'Learn Dev Ops' },
  // { id: 3, description: 'Learn Cloud Computing' },
  // ]

  constructor(private todoService: TodoDataService, private router: Router) {

  }
  ngOnInit(): void {
    this.refreshTodos();
  }
  refreshTodos() {
    this.todoService.retrieveAllTodos('muizz30520').subscribe(
      response => { this.todos = response }
    );
  }
  deleteTodo(id: any) {
    // console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('muizz30520', id).subscribe(
      response => {
        console.log(response);
        this.message = `Deletion of Todo was successful!`;
        this.refreshTodos()
      }
    );
  }
  updateTodo(id: any) {
    this.router.navigate(['todos', id])
  }
  addTodo() {
    this.router.navigate(['todos', -1])
  }
}
