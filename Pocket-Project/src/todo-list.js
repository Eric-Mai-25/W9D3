// let todos = []

const ulTodos = document.querySelector('.todos')
const fAddTodo = document.querySelector('.add-todo-form')

const todos = JSON.parse(localStorage.getItem("todos")) || []

const addTodo = (e)=>{
    e.preventDefault()
    let input = document.querySelector("input[name='add-todo']")
    let value = input.value

    const item =  {
        value: value,
        done: false
    }
    todos.push(item)
    localStorage.setItem("todos", JSON.stringify(todos))
    fAddTodo.reset()
    populateList(todos)
}

const populateList = (todos)=>{
    ulTodos.innerHTML = todos.map((todo)=>{
       return `<li>
        <label>${todo.value}
        <input type="checkbox" value="true" ${todo.done ? 'checked' : "" } ></input>
        </label>
        </li>`
    }).join(' ')
    // tList.forEach((todo)=>{
    //     ulTodos.innerHTML = todo
    // })
}

fAddTodo.addEventListener("submit", addTodo)
