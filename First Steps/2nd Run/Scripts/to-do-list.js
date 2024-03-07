const todoList = [];
//console.log(typeof todoList);

let pageHtml = ``;


function addTask(){

const task=document.querySelector('.task-input-js');

const taskValue = task.value;

console.log(taskValue);

todoList.push(taskValue);

console.log(todoList);

pageHtml = `<p>${taskValue}</p>`

document.querySelector('body').innerHTML += pageHtml;

};