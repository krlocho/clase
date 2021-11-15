const list = document.querySelector('ul');
const addForm=document.forms["add-ex"];


// filter files
const searchBar = document.forms['searchBar'].querySelector('input');
searchBar.addEventListener('keyup',(e)=>{// FAT ARROW FUNCTION
  const term = e.target.value.toLowerCase();// to insure matches
  const files = list.getElementsByTagName('li');
    
  Array.from(files).forEach(function (exer){ //FOR EACH instead of for loop
    const title = exer.textContent;
    if(title.toLowerCase().indexOf(term) == -1){ //-1 means not present
      exer.style.display = 'none';
    } else {
      exer.style.display = 'block';
    }
  });
});



// delete exercises
list.addEventListener('click', function(e) {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    if (li.className = "archivo"){
    li.parentNode.removeChild(li);} //removes the element
   //li.setAttribute ('style', 'display: none');//Hides the element 
  // li.style.display="none"; 
    //https://www.w3schools.com/jsref/prop_style_display.asp
  }
});


addForm.querySelector("button").addEventListener('click', function(e){
 e.preventDefault();//https://www.w3schools.com/tags/att_button_type.asp

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const ExName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  ExName.textContent = value;
  deleteBtn.textContent = 'delete';
  
    // add classes
  ExName.classList.add('name');
  deleteBtn.classList.add('delete');


  // append to DOM
  e.target.parentElement.parentElement.appendChild(li);
  e.target.parentElement.parentElement.appendChild(ExName);
  e.target.parentElement.parentElement.appendChild(deleteBtn);
 
  });