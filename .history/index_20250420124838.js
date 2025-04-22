let dropdownBtn = document.getElementsByClassName('dropdown');
let dropdownMenu = document.getElementsByClassName('dropdown-menu');

for(int i )
dropdownBtn[i].addEventListener("click", ()=>{
    dropdownMenu[i].style.display = dropdownMenu.style.display == "block" ? "none" : "block";
})