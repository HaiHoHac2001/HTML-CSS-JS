var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btnremoveall = document.querySelector('.remove-all')

var tags = ['HTML', 'CSS']

function render(){
    content.innerText =''
    for (let i=0; i<tags.length; i++){
        const tag = tags[i]
        content.innerHTML += `
                            <li>
                                    ${tag}
                                    <i class='bx bx-x' onclick='removetag(${i})'></i>
                            </li>
        `
    }
    content.appendChild(input)
    input.focus()
}

render()

input.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        tags.push(input.value.trim())
        input.value = ''
        render()

    }
})

function removetag(index){
    tags.splice(index, 1)
    render()
}

btnremoveall.addEventListener('click', function(){
    tags = []
    render()
})