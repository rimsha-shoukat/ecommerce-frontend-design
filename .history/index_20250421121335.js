let dropdownBtn = document.getElementsByClassName('dropdown');
let dropdownMenu = document.getElementsByClassName('dropdown-menu');
let dropdownIcon = document.getElementsByClassName("icon");

// Dropdown menu
for(let i = 0; i < dropdownBtn.length; i++){
    dropdownBtn[i].addEventListener("click", ()=>{
        dropdownMenu[i].style.display = dropdownMenu[i].style.display == "block" ? "none" : "block";
        dropdownIcon[i].style.transform = dropdownMenu[i].style.display === "block" ? "rotate(0deg)" : "rotate(180deg)";
    });
}

let displayRow = true;

//Due to identical name, description and price of all items only listing image URL
let productsList = ["assests/electronics-category-img4.png", "assests/deal-img5.png", "assests/electronics-category-img3.png", "assests/deal-img2.png", "assests/deal-img1.png", "assests/electronics-category-img1.png"]

// Create the HTML for the list based on the displayRow variable
let listItems1 = productsList.map((imgSrc) => {
    return `<div class="flex flex-row p-2 items-center justif"></div>`;
}).join(''); 

let listItems2 = productsList.map((imgSrc) => {
    return ``;
}).join(''); 

// Get the products container
let products = document.getElementById("itemsList");

// Set the innerHTML of the products container
products.innerHTML = `<div class="grid ${displayRow ? 'grid-cols-1' : 'grid-cols-4'} gap-[1rem] w-[100%] h-auto">${displayRow ? listItems1 : listItems2}</div>`;