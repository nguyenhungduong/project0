// object
// object mutation
// prorotypal Inheritance kế thừa
// Scope
// Closures
// Immediately Invoked Function Expression IIFE
// First-Class Functions
// Synchronous? Async? Single-Threaded?
// Asynchronous JavaScript
// Execution Stack
// Overflow
// Asynchronous Functions
// Callbacks
// Promises
// Async/Await
// this


const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')



function newTodo() {
  //input new something
  const addNewSomething = prompt("Add something")
  //check addnewSomething 
  if (addNewSomething != "" && addNewSomething != null) {
    itemCountSpan.innerText = Number(itemCountSpan.innerText) + 1
    console.log(addNewSomething)
    //add newSomething to list
    donNotNo(addNewSomething)
    setEvent()
    
  }
  
}
function setEvent(){
  let arrCheckBox=document.getElementsByClassName(classNames.TODO_CHECKBOX)
  console.log(typeof(arrCheckBox))

  for(let i=0;i<Number(itemCountSpan.innerText);i++){
    arrCheckBox[i].onclick=(checkbox)=>{
      if(checkbox.checked){
        uncheckedCountSpan.innerText=Number(uncheckedCountSpan.innerText)-1
      }else{
        uncheckedCountSpan.innerText=Number(uncheckedCountSpan.innerText)+1
      }
    }
  }
}
function deleteLi(){
  let arrDeleteCheckBox=document.getElementsByClassName(classNames.TODO_DELETE)
  for(let i=0;i<Number(itemCountSpan.innerText);i++){
    arrDeleteCheckBox[i].onclick=()=>{
      arrDeleteCheckBox[i].remove()
    }
  }
}

function donNotNo(addNewSomething) {

  var li = document.createElement("LI");
  li.className = classNames.TODO_ITEM
  li.style.boxShadow = "2px 5px 10px"
  li.style.borderRadius = "50px"
  li.style.margin = "30px 20px"

  

  function input() {
    let input = document.createElement("input");
    input.className = classNames.TODO_CHECKBOX
    input.type = "checkbox"
    input.checked=false
    uncheckedCountSpan.innerText=Number(uncheckedCountSpan.innerText)+1
    return input
  }
  
  function span(text) {
    let span = document.createElement("span");
    span.className = classNames.TODO_TEXT
    span.innerText = text
    return span
  }

  function button() {
    var button = document.createElement("button");
    button.className = classNames.TODO_DELETE
    button.innerText = "Detele"
    //style
    button.style.float = "right"
    button.style.padding = "27px 16px"
    button.style.boxShadow = "1px 3px 5px"
    button.style.borderRadius = "50px"
    button.style.margin = "0 30px 0 0"
    return button
  }


  li.appendChild(input())
  li.appendChild(button())
  li.appendChild(span(addNewSomething))
  list.appendChild(li);

}

