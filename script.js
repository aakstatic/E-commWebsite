var dropdown = document.querySelectorAll('.dropdown-menu')[1];
var dropbtn = document.querySelectorAll('.dropdown-toggle')[1];
var input = document.querySelector('.form-control');
dropdown.addEventListener('click',(e) => {
  console.log(dropbtn);
  dropbtn.innerHTML = e.target.innerText;
  input.placeholder = `Search ${e.target.innerText}`;
});