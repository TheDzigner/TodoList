let nextTodoId = 1;

const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos') || '[]')

const app = Vue.createApp({

  data() {

    return {

     isTodo : todosFromLocalStorage.length > 0, 

      newTodo: '',

     todos: todosFromLocalStorage

    }

  },

  methods: {

    addTodo() {

      if (this.newTodo.trim()) {

         todosFromLocalStorage.push({

          id: nextTodoId++,

          todo: this.newTodo,

          done: false

        });

        

     localStorage.setItem('todos', JSON.stringify(todosFromLocalStorage))

        this.isTodo = true

        this.newTodo = '';

      } else {

        alert('Todo cannot be empty');

      }

    },

    removeTodo(todo) {

     

      if (confirm('Delete Todo ?!')) {

      this.todos = this.todos.filter((t) => t !== todo)

      

      localStorage.setItem('todos', JSON.stringify(this.todos));

      

      }

      

      

           

    }

  }

}).mount('#app');

