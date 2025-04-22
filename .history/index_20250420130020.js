let dropdownBtn = document.getElementsByClassName('dropdown');
let dropdownMenu = document.getElementsByClassName('dropdown-menu');
let dropdownIcon = document.getElementsByClassName("icon");

for(let i = 0; i < dropdownBtn.length; i++){
    dropdownBtn[i].addEventListener("click", ()=>{
        dropdownMenu[i].style.display = dropdownMenu[i].style.display == "block" ? "none" : "block";
        drop
    });
}