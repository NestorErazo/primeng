import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-signal-ejemplo4',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './signal-ejemplo4.component.html',
  styleUrl: './signal-ejemplo4.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
 // template: `
})
export class SignalEjemplo4Component {

  todoName = '';
  todos: WritableSignal<String[]>=signal([]);
  value: any;

  addTodo(todo: HTMLInputElement){
    const item=todo.value;
    this.updateTodos(item);
    this.resetAndFocus(todo);
  
  }
  updateTodos(todo: String){
    this.todos.update( (todos)=>[todo, ...todos]);

  }
  resetAndFocus(todo: HTMLInputElement){
    todo.value='';
    todo.focus();
  }
}
