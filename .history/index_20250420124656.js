let dropdownBtn = document.getElementsByClassName('dropdown');
let dropdownMenu = document.getElementsByClassName('dropdown-menu');

dropdownBtn.addEventListener("click", ()=>{
    dropdownMenu.style.display = dropdownMenu.style.display == "block" ? "none" : "block";
})