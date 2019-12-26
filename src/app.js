import { throwStatement } from "../../../../AppData/Local/Microsoft/TypeScript/3.7/node_modules/@babel/types/lib/index";

export class App {
  constructor() {
    this.heading = 'Todos';
    this.todos = [];
    this.todoDescription = '';
  };

  addTodo() {
    if (this.todoDescription) {
      this.todos.push({
        description: this.todoDescription,
        done: false
      });
      this.todoDescription = '';
    };
  };

  removeTodo(todo, ev) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    };

    console.log(ev);
  };
};
