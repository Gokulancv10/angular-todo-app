import { Component } from '@angular/core';
import { TodoClass } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todoItems: TodoClass[] = [];

  onCreateTodo(todoData: { id: number, name: string }) {
    this.todoItems.push({
      id: todoData.id,
      name: todoData.name
    })
    console.log("AFTER CREATED TODO: ");
    console.table(this.todoItems);
  }

  onDeleteTodo(todoId: { id: number }) {
    console.log("DELETE TODO ID: " + todoId.id);
    for (let index = 0; index < this.todoItems.length; index++) {
      if (this.todoItems[index].id === todoId.id) {
        this.todoItems.splice(index, 1);
      }
    }
    console.log("AFTER DELETED A TODO: ");
    console.table(this.todoItems);
  }

  onEditTodo(todoData: { id: number, updatedName: string }) {
    for (let index = 0; index < this.todoItems.length; index++) {
      if (this.todoItems[index].id === todoData.id) {
        this.todoItems[index].name = todoData.updatedName;
      }
    }
  }
}
