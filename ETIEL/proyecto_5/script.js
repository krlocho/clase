const list = document.querySelector('ul');
const addForm = document.forms["add-ex"];



// filter files
const searchBar = document.forms['searchBar'].querySelector('input');
searchBar.addEventListener('keyup', (e) => { // FAT ARROW FUNCTION
  const term = e.target.value.toLowerCase(); // to insure matches
  const files = list.getElementsByTagName('li');

  Array.from(files).forEach(function (exer) { //FOR EACH instead of for loop
    const title = exer.textContent;
    if (title.toLowerCase().indexOf(term) == -1) { //-1 means not present
      exer.style.display = 'none';
    } else {
      exer.style.display = 'block';
    }
  });
});



// delete exercises
list.addEventListener('click', function (e) {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement;
    console.log(e.target.parentElement.parentElement)
  
     li.parentNode.removeChild(li);
    
  }
});



function a (){
addForm.querySelector("btton").addEventListener('click', function (e) {
  e.preventDefault(); //https://www.w3schools.com/tags/att_button_type.asp

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  li.innerHTML = value + '<img class="delete" src="img/delete.png" alt=""></img>';




  // append to DOM
  e.target.parentElement.parentElement.appendChild(li);

});
}
list.addEventListener('click', function (e) {
  if (e.target.className == 'add') {
    const li = e.target.parentElement;
    const form = document.createElement("form")
    form.classList.add( "add-ex")
    const ate = '<input type="text" placeholder="Add an exercise..." /><button>Add</button>'
    const addText = document.createElement("input") ;
    const addButton = document.createElement ("button");
    
    console.log(e.target.parentElement.parentElement)
    addButton.innerHTML = "ADD"
    addButton.
    addText.setAttribute("type", "text");
  
     li.appendChild(addText);
     li.appendChild(addButton);

     a()
  }
});

