const form = document.getElementById("form")
const input = document.getElementById("input")
const todoUl = document.getElementById("todos")

const todos= JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo=> addTodo(todo))
}


form.addEventListener("submit", (e) => {
    e.preventDefault()

    addTodo();
})

function addTodo(todo) {
    let todoText = input.value
    if (todo) {
        todoText = todo.text
    }
    if (todoText) {
        const todeEl = document.createElement("li")
        if (todo && todo.completed) {
            todeEl.classList.add("completed")
        }
           todeEl.innerHTML=todoText
            
           todeEl.addEventListener('click',()=>{
            todeEl.classList.toggle("completed")
            updateLS()
           })
            
           todeEl.addEventListener('contextmenu', (e)=>{
            e.preventDefault()
            todeEl.remove();
            updateLS()
           })

           todoUl.appendChild(todeEl);
           input.value=' ';

           updateLS()
           
    }  
}

function updateLS(){
    const todosEl=document.querySelectorAll("li")

    // const todos=[{todoText:'text',completed:true}]
    const todos=[]
    todosEl.forEach(todo=>{
        todos.push({
            text: todo.innerText,
            completed: todo.classList.contains('completed')
        })
    })

    localStorage.setItem('todos',JSON.stringify(todos))
}