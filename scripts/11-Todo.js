const todoList = [{name: 'make dinner',
      dueDate: '22-25.11',
   },
   {
      name:'wash clothes',
      dueDate:'23-2-22'
   }];


  renderTodoList();
   function renderTodoList(){


   let todoListHTML = '';
   for(let i = 0; i < todoList.length; i++){
      const todoObject = todoList[i]
      const {name,dueDate} = todoObject; //this is called destructuring when we get the values in the object
      const html = `
      <div>${name}</div>
      <div> ${dueDate}</div>
       <button onclick="
       todoList.splice(${i},1)
       renderTodoList()
       " class="delete-button">Delete</button> 
       `;
      todoListHTML += html;

   };
   console.log(todoListHTML)
   document.querySelector('.js-todo-list').innerHTML = todoListHTML;
   }
   
   
   function addTodo(){
      const inputElement = document.querySelector('.js-name-input');
      let name = inputElement.value;

      const dateinputElement = document.querySelector('.js-due-date-input');
      const dueDate = dateinputElement.value;
      


      if(!name){
         alert("please enter somethings")
         return;
      }
      if(!dueDate){
         alert("please enter due date")
         return;
      }
      
      todoList.push({name , dueDate});
      inputElement.value = '';
      dateinputElement.value = '';
      renderTodoList();


   }

   
