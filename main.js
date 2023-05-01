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

          isEditing : false, 

          

          scrollH : undefined

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

  

    const newHeight = event.target.scrollHeight  

  

  

    event.target.style.height = `${newHeight}px`

 

  

    

    this.allTodos[todo.id].scrollH = newHeight 

   

   

    localStorage.setItem('todos', JSON.stringify(this.allTodos));

   }, 

  saveEdit(todo) {

  this.allTodos[todo.id].isEditing = false

   const todoEdited = this.editedTodo 

 

    if (todoEdited.trim()) {

     this.allTodos[todo.id].todo = todoEdited

     localStorage.setItem('todos', JSON.stringify(this.allTodos));

    } else {

     alert('Todo cannot be empty');

      this.allTodos[todo.id].isEditing = true

   

    }

   },

     

    removeTodo(todo) {

   if (confirm('Delete Todo ?!')) {

      this.allTodos = this.allTodos.filter((t) => t !== todo)

     

      localStorage.setItem('todos', JSON.stringify(this.allTodos));

      window.location.reload(true);

      }

    }

   

  }

 , 

  computed : {

    hasTodo(){

     return this.allTodos.length > 0 ;

    }

   }

}).mount('#app');

