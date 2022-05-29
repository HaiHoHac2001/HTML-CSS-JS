var form = document.querySelector('form')
var todos = document.querySelector('.todos')
var input = document.querySelector('input')
var button = document.querySelector('button')

form.addEventListener('submit', function(e){
    e.preventDefault()
    let val = input.value.trim()
    if(val){
        addTodoElement({
            text: val,
        })
    }
    saveTodo_list()
    input.value = ''
})

function addTodoElement(todo){
    // {    
            // text:
            // status
    // }
    // <li>
    //     <span>TEST</span>
    //     <i class='bx bxs-trash'></i>
    // </li>
    let li = document.createElement('li')
    li.innerHTML = `
                    <span>${todo.text}</span>
                    <i class='bx bxs-trash'></i>
    `

    if(todo.status === 'completed'){
        li.setAttribute('class','completed')
    }

    li.addEventListener('click', function(){ 
        this.classList.toggle('completed')
        saveTodo_list()
    })

    li.querySelector('i').addEventListener('click', function(){
        this.parentElement.remove()
        saveTodo_list()
    })

    todos.appendChild(li)
}

function saveTodo_list(){
    let todoList = document.querySelectorAll('li')
    let todoStorage = []
    todoList.forEach(function(item){
        let text = item.querySelector('span').innerText
        let status = item.getAttribute('class')

        todoStorage.push({
            text,
            status
        })
    })

    localStorage.setItem('todolist',JSON.stringify(todoStorage))
}

function init(){
    let data = JSON.parse(localStorage.getItem('todolist'))
    data.forEach(function(item){
        addTodoElement(item)
    })
}

init()