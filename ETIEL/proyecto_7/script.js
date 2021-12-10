const inputs = document.querySelectorAll('input');


const username=/^[a-z\d]{5,12}$/i;
const dni=/^[x]*\d{8}[a-z]$/i

/*/
// regex patterns
const patterns = {
      username: /^[a-z\d]{5,12}$/i,
      dni: /^[x]*\d{8}[a-z]$/i
      
};*/


// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
            // console.log(patterns[e.target.attributes.name.value]);
      if (e.target.name =="dni") {validate(e.target, dni)};
      if (e.target.name =="username") {validate(e.target, username)};

      //validate(e.target, patterns[e.target.attributes.name.value]);
      
    });
});
// validation function
function validate(field, regex){

    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }

}
