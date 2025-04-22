let dropdownBtn = document.getElementsByClassName('dropdown')[0];
let dropdownMenu = document.getElementsByClassName('dropdown-menu')[0];

dropdownBtn.addEventListener("click", ()=>{
    dropdownMenu.style.display = dropdownMenu.style.display == "block" ? "none" : "block";
})