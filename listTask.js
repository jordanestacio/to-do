import {BtnConcluded} from "./components/Buttons.js";
import {BtnDelete} from "./components/Buttons.js"

const btnNewTask = document.querySelector('#btn-add-task');
const listTask = document.querySelector('.list-task');
const inputTask = document.querySelector('#input-task');

btnNewTask.addEventListener('click', function(){
    event.preventDefault();

    listTask.appendChild(task(inputTask.value));
    inputTask.value = '';
});

const task = (content) => {
    const itemTask = document.createElement('li');
    itemTask.innerHTML = `<p class="content-task">${content}</p>`;
    itemTask.classList.add('item-task');

    itemTask.appendChild(BtnConcluded());

    itemTask.appendChild(BtnDelete());

    return itemTask;
}