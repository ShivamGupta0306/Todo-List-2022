const textinputfield = document.querySelector("#input-text-field");
const addbutton = document.querySelector("#add-button");
const todoscontainer = document.querySelector(".todos-container");
textinputfield.addEventListener("keypress", (e)=>{
  if(e.key === "Enter"){
    if (textinputfield.value.trim().length == "") {
      alert("Please write something in Text Field!!!")
      return;
    }
//   create todocontainer class = todos-container
const todoitem = document.createElement("div");
todoitem.id = "todo-item";
todoscontainer.appendChild(todoitem);

// create paragraph id = todo-text
const todotexts = document.createElement("p");
todotexts.id = "todo-text";
todotexts.innerText=textinputfield.value;
todoitem.appendChild(todotexts)

todotexts.addEventListener("dblclick", ()=>{
  todotexts.classList.add("line-through");
  editbutton.setAttribute("disabled", "disabled");
})

// create a edit button
const editbutton = document.createElement("button");
editbutton.id="edit-button";
// create edit image
const editimage = document.createElement("img");
editimage.src = "edit.svg";
editbutton.appendChild(editimage);
todoitem.appendChild(editbutton);
editbutton.addEventListener("click", ()=>{
  textinputfield.value = todotexts.innerText;
  const parent = editbutton.parentElement;
  parent.remove();

})

// create a delete button
const deletebutton = document.createElement("button");
deletebutton.id = "delete-button";
const deleteimage = document.createElement("img");
deleteimage.src = "delete.svg";
deletebutton.appendChild(deleteimage);
todoitem.appendChild(deletebutton);

deletebutton.addEventListener("click", ()=>{
  const parent = deletebutton.parentElement;
  parent.remove();
})
textinputfield.value = "";
  }
});



addbutton.addEventListener("click", () => {
  if (textinputfield.value.trim().length == "") {
    alert("Please write something in Text Field!!!")
    return;
  }

//   create todocontainer class = todos-container
const todoitem = document.createElement("div");
todoitem.id = "todo-item";
todoscontainer.appendChild(todoitem);

// create paragraph id = todo-text
const todotexts = document.createElement("p");
todotexts.id = "todo-text";
todotexts.innerText=textinputfield.value;
todoitem.appendChild(todotexts)

todotexts.addEventListener("dblclick", ()=>{
  todotexts.classList.add("line-through");
  editbutton.setAttribute("disabled", "disabled");
})

// create a edit button
const editbutton = document.createElement("button");
editbutton.id="edit-button";
// create edit image
const editimage = document.createElement("img");
editimage.src = "edit.svg";
editbutton.appendChild(editimage);
todoitem.appendChild(editbutton);
editbutton.addEventListener("click", ()=>{
  textinputfield.value = todotexts.innerText;
  const parent = editbutton.parentElement;
  parent.remove();

})

// create a delete button
const deletebutton = document.createElement("button");
deletebutton.id = "delete-button";
const deleteimage = document.createElement("img");
deleteimage.src = "delete.svg";
deletebutton.appendChild(deleteimage);
todoitem.appendChild(deletebutton);

deletebutton.addEventListener("click", ()=>{
  const parent = deletebutton.parentElement;
  parent.remove();
})
textinputfield.value = "";

});
