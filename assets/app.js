const task = document.querySelector('#tasks');
const button = document.querySelector('#button');
const taskName = document.querySelector('#task-name');
const addTask = document.querySelector('#new-task');
const p = document.createElement('p');
let tasks = [];


// função para ler novamente os itens da tasks
function arrayOfTasks() {
    tasks = document.querySelectorAll('.task');
}

function addNewElement() {
    const div = document.createElement('div');
    let newTask = taskName.value;

    if(newTask !== "") {
        div.classList.add('task');
        div.innerHTML = `<input type="checkbox" onclick="verifyCheck()">${newTask}`;
        task.insertAdjacentElement('beforeend', div); //adiciona a nova tarefa no final de todas as outras
    
        taskName.value = ""; // deixa o input zerado
    
        arrayOfTasks(); // chama a função para ler os novos elementos

    } else {
        // adiciona um aviso para não deixar a tarefa sem nome
        p.style.display = 'block';
        p.classList.add('warning');
        p.innerText = 'Você deve adicionar um nome a tarefa ;)';
        addTask.insertAdjacentElement('afterend', p);

    }
}


// Adiciona a tarefa apertando o enter
taskName.addEventListener('keyup', event => {
    event.key === 'Enter' ? addNewElement() : p.style.display = 'none';
        
})
    
// Adiciona a tarefa clicando no botão
button.addEventListener('click', event => { 
   addNewElement();
})


// marca os itens já realizados
function verifyCheck() {
    tasks.forEach(task => {
        task.addEventListener('click', event => {
            const isTaskChecked = task.children[0].checked === true;
    
            if (isTaskChecked){
                task.classList.add('task-done');
            } else {
                task.classList.remove('task-done');
            }
        })
    })
}


