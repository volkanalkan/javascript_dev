let result;

// // result = document.getElementById("title");
// // result = document.getElementById("title").id;
// // result = document.getElementById("title").className;
// // result = document.getElementById("title").classList;

// // document.getElementById("title").style.fontSize = "30px";
// // document.getElementById("title").style.color = "blue";
// // // document.getElementById("title").style.display = "none";

// // document.getElementById("title").innerText = "Todo App";

// // document.getElementById("title").innerHTML = "<p>Todo App</p>";

// // result = document.querySelector("#title");

// // result = document.querySelector(".card_header");

// // result = document.querySelector("div"); //first div element they find

// // result = document.querySelector("li");

// // result = document.querySelector("li:first-child");

// // result = document.querySelector("li:last-child");

// // result = document.querySelector("li:nth-child(2)");

// // result = document.getElementsByClassName("task")[0];

// // result = document.getElementsByClassName("task")[1];

// // result = document.getElementsByClassName("task");

// // for (let i=0; i<result.length; i++) {
// //   console.log(result[i]);
// // }

// // ul = document.getElementById("task-list");
// // result = ul.getElementsByTagName("li");

// // result = document.querySelectorAll("#task-list li");

// // for(task of result){
// //   task.style.color = "red";
// //   task.style.fontSize = "20px";
//   // task.innerText = "Item";
// // }

// ul = document.getElementById("task-list");

// // children, firstElementChild, lastElementChild

// //parentElement

// // nextElementSibling, previousElementSibling

// result = ul.children;
// result = ul.children[0];
// result = ul.firstElementChild;
// result = ul.lastElementChild;

// result = document.getElementById("title").parentElement;

// result = document.querySelector(".task").nextElementSibling.previousElementSibling;

let taskList = [
  {"id": 1, "taskName": "Task 1"},
  {"id": 2, "taskName": "Task 2"},
  {"id": 3, "taskName": "Task 3"},
  {"id": 4, "taskName": "Task 4"}
];

ul = document.getElementById("task-list");

for (let index of taskList) {
  let li = `
  <li class="task list-group-item">
    <div class="form-check">
      <input type="checkbox" id="${index.id}" class="form-check-input">
        <label for="${index.id}" class="form-check-label">${index.taskName}</label>
      </div>
  </li>
`;

ul.insertAdjacentHTML("beforeend", li);
}

// document.querySelector("#task-list").parentElement.remove();

// document.querySelector("#task-list").children[0].remove();
// document.querySelector("#task-list").children[1].remove();

// document.querySelector("#task-list").removeAttribute("class");

// result = document.querySelector("#task-list").children[1].classList[1];

document.querySelector("#task-list").children[1].classList.add("bg-warning");

// document.querySelector("#task-list").children[1].classList.remove("bg-danger")

result = document.querySelector("#task-list").children[1].classList.contains("bg-danger"); //do they have?




console.log(result);

// ul.children[0].children[0].children[0].checked = true;

// ul.children[0].nextElementSibling.children[0].children[0].checked = true;

// ul.children[0].nextElementSibling.nextElementSibling.children[0].children[0].checked = true;

// console.log(li);