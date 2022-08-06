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
  }

  onDeleteTodo(todoId: { id: number }) {
    for (let index = 0; index < this.todoItems.length; index++) {
      if (this.todoItems[index].id === todoId.id) {
        this.todoItems.splice(index, 1);
      }
    }
  }

  onEditTodo(todoData: { id: number, updatedName: string }) {
    for (let index = 0; index < this.todoItems.length; index++) {
      if (this.todoItems[index].id === todoData.id) {
        this.todoItems[index].name = todoData.updatedName;
      }
    }
  }
}
