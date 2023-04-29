const todosFromStorage = 

JSON.parse(localStorage.getItem('todos') || '[]')

const app = Vue.createApp({

  data() {

    return {

      newTodo: '',

     

      nextTodoId :todosFromStorage.length, 

      

      allTodos: todosFromStorage, 

      

      editedTodo : ''

    }

  },

  methods: {

   

   

    addTodo() {

      if (this.newTodo.trim()) {

         todosFromStorage.push({

          id:this.nextTodoId++,

          todo:this.newTodo,

          done: false, 

          isEditing : false

        });

        

     localStorage.setItem('todos', JSON.stringify(todosFromStorage))

     

       this.newTodo = '';

        

      } else {

        alert('Todo cannot be empty');

      }

    },

    

    checkDone(todo)

    {

     

   

  this.allTodos[todo.id].done =

  !this.allTodos[todo.id].done

   

   localStorage.setItem('todos', JSON.stringify(this.allTodos));

   

   

    }, 

    

    

   editTodo(event,todo)

     {

    

   this.editedTodo = event.target.value 

       

   this.allTodos[todo.id].isEditing = true

       

   }, 

  saveEdit(todo) {

    

  this.allTodos[todo.id].isEditing = false

  const todoEdited = this.editedTodo 

  

  

  

    if (todoEdited.trim()) {

     

     this.allTodos[todo.id].todo = todoEdited

  

     localStorage.setItem('todos', JSON.stringify(this.allTodos));

     

    } else {

     

     alert('Todo cannot be empty');

     

     

    }

   },

     

     

     

    removeTodo(todo) {

     

      if (confirm('Delete Todo ?!')) {

       

      this.allTodos = this.allTodos.filter((t) => t !== todo)

      

      

      localStorage.setItem('todos', JSON.stringify(this.allTodos));

      

      }

    }

   , 

   

   

  }

 , 

  computed : {

    hasTodo(){

     return this.allTodos.length > 0 ;

    }

   }

}).mount('#app');

 
