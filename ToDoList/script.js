const Addbtn = document.getElementById("Addbtn");
const Delbtn = document.getElementById("Delbtn");
let inputTask = document.getElementById("task");
inputTask.value = "";
const ul = document.querySelector("ul");
const showList=function showList(){
    return JSON.parse( localStorage.getItem("arrOfTasks"))
   }
let localTodoList = showList() || [];
console.log(localTodoList)


//On click add
Addbtn.addEventListener("click", (e) => {
  e.preventDefault();//prevents form submit

 
  //pushing all tasks in that localTodolist array
  const ToDoListVals = inputTask.value.trim();

  if (!localTodoList.includes(ToDoListVals) && ToDoListVals !== '') {
      localTodoList.push(ToDoListVals);
  }
  

  localTodoList = [...new Set(localTodoList)];
  localStorage.setItem("arrOfTasks",JSON.stringify(localTodoList))

  
  
  console.log(localTodoList);
  let divElem = document.createElement("div");
  divElem.classList.add("list-elem");
  if (inputTask.value === "" || inputTask.value === undefined) {
    return 1;
  } else {
    divElem.innerHTML = ` <li>${inputTask.value}</li>
    <button class="btn" id="Delbtn">Done</button>`;
    ul.append(divElem);
    console.log(inputTask.value);
  }
  inputTask.value = "";
});
