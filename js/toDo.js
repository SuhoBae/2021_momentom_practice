const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

//value값도 함께 지우기 위한 프로세스?
//1.localStorage에서 지운다.
//2.근데 어느 것인지 모른다. 순서의 문제인가?
//위의 순서는 틀렸다.
//1.localStorage에 있는 array를 다시 불러온다.
//2.array중 delete버튼의 li와 연동된 value를 식별한다.(어떻게 자기자신인지 알지???)
//3.해당 value를 삭제하고 array를 다시 localStorage를 위한 string으로 변환한다.(아마도 아래의 펑션 saveTodos()실행?)

//혹은 Delete를 누르면 array를 덮어씌울수도 있지 않을까?

const TODOS_KEY = "todos";

let todos = []; //array 완성

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement; //event안의 target을 통해서 parentNode(parentElement)까지 찾을 수 잇다.
  li.remove();
  todos = todos.filter((toDo) => toDo.id !== parseInt(li.id)); //로컬스토리지에서 다시 불러오면 string이기 때문에 parseInt로 정수로 데이터타입을 변경해야함
  saveTodos(); //다시 localStorage에다 string으로 저장!
}

//2차시
// !!! 여기까지의 문제점. 새로고침 한 뒤 저장된 localStrage값은 들어가는데, 이후 추가로 input되는 값들의 표시가
// !!! [[1,2,3]1,2,3,4]처럼array 안의 array로 localStorage에 저장된다... 자꾸 뜨는 null은 어디서 온 건지 당최 알수가 없다.
// !!! 여기까지의 문제점. 새로고침 한 뒤 저장된 localStrage값은 들어가는데, 이후 추가로 input되는 값들의 표시가
// !!! [[1,2,3]1,2,3,4]처럼 array 안의 array로 localStorage에 저장된다... 자꾸 뜨는 null은
//}

//필요한 것!!
//1.LocalStorage에 저장된 value를 불러온다.
//2.불러온 값들을 다시 array로 만든다.
//3.이 array를 변수로 저장한다.
//4. 변수로 저장된 array(item)들을 다시 paintTodo한다.(그럼 아마도 newTodo_v2가 있어야겠지?)
//5.

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id; //li에 newTodoObj의 id를 생상해줘라는 명령 ㅠㅠㅠㅠㅠㅠ
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "DELETE";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  todos.push(newTodoObj);
  saveTodos();
}

function writeTodoListHandler(event) {
  const value = toDoInput.value;
  console.log(value.length);
  if (value.length === 0) {
    alert("Plz write real word");
  } else {
    console.log(value);
    event.preventDefault();
    const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사한다.
    toDoInput.value = "";
    const newTodoObj = {
      ///todos를 let으로 바꾸고 속성을 추가해줬다.
      text: newTodo,
      id: Date.now(), //주가된 속성은 id이고 date.now의 랜덤숫자를 받아서 명명된다.
    };
    paintTodo(newTodoObj); //<<paintTodo function으로 newTodo 값을 보낸다!
  }
}
/*
if (saveTodos === null) {
} else {
  loadSavedTodos();
  //print tods from localStorage (May function?)
}
*/
toDoForm.addEventListener("submit", writeTodoListHandler);

if (localStorage.getItem(TODOS_KEY) !== null) {
  const newTodosArray = JSON.parse(localStorage.getItem(TODOS_KEY));
  newTodosArray.forEach((newTodoObj) => {
    console.log(`This is ${newTodoObj.text}`);
    paintTodo(newTodoObj);
  });
} else {
  console.log("Array is empty");
}
