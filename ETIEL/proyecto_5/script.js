const list = document.querySelector('ul');
// filter files
const searchBar = document.forms['searchBar'].querySelector('input');
searchBar.addEventListener('keyup',(e)=>{// FAT ARROW FUNCTION
  const term = e.target.value.toLowerCase();// to insure matches
  const files = list.getElementsByTagName('li');
    
  Array.from(files).forEach(function (exer){ //FOR EACH instead of for loop
    const title = exer.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) == -1){ //-1 means not present
      exer.style.display = 'none';
    } else {
      exer.style.display = 'block';
    }
  });
});