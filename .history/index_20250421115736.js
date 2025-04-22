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

//Due to identical name, description and price of all items only listing image URL
let productsList = ["assests/electronics-category-img4.png", "assests/deal-img5.png", "assests/electronics-category-img3.png", "assests/deal-img2.png", "assests/deal-img1.png", "assests/electronics-category-img1.png"]

let list1 = ` <div class="flex flex-row gap-[1rem] w-[100%] h-auto"> 
            </div>`

let products = document.getElementById("itemsList");

products.innerHtml = ``
