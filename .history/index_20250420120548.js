let dropdownBtn = document.getElementsByClassName('dropdown')[0];
let dropdownMenu = document.getElementsByClassName('dropdown-menu')[];

dropdownBtn.addEventListener("click", ()=>{
    dropdownMenu.style.display = dropdownMenu.style.display == "block" ? "none" : "block";
})