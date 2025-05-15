let dropdownBtn = document.getElementsByClassName('dropdown');
let dropdownMenu = document.getElementsByClassName('dropdown-menu');
let dropdownIcon = document.getElementsByClassName("icon");

// Get the products container
let products = document.getElementById("itemsList");
let displayRow = true;

// save items
const saveItems = JSON.parse(localStorage.getItem('saveItems'));
let saved = document.getElementById("itemsList");

// Dropdown menu
for(let i = 0; i < dropdownBtn.length; i++){
    dropdownBtn[i].addEventListener("click", ()=>{
        dropdownMenu[i].style.display = dropdownMenu[i].style.display == "block" ? "none" : "block";
        dropdownIcon[i].style.transform = dropdownMenu[i].style.display === "block" ? "rotate(0deg)" : "rotate(180deg)";
    });
}

let Layout = document.getElementById("layout");
//layout html
Layout.innerHTML = `
    <div onclick="toggleDisplay(false)" class="cursor-pointer py-2 px-[0.65rem] hover:bg-gray-300">
        <i class="fa-lg fa-brands fa-microsoft"></i>
    </div>
    <div onclick="toggleDisplay(true)" class="cursor-pointer py-2 px-[0.65rem] border-l border-gray-300 hover:bg-gray-300">
        <i class="fa-solid fa-bars fa-lg"></i>
    </div>`

//Due to identical name, description and price of all items only listing image URL
let productsList1 = ["assests/electronics-category-img4.png", "assests/deal-img5.png", "assests/electronics-category-img3.png", "assests/deal-img2.png", "assests/deal-img1.png", "assests/electronics-category-img1.png"]
let productsList2 = ["assests/electronics-category-img4.png","assests/product1.png", "assests/deal-img5.png", "assests/electronics-category-img4.png", "assests/deal-img3.png", "assests/product1.png", "assests/deal-img2.png", "assests/deal-img1.png", "assests/electronics-category-img4.png"]

// Create the HTML for the productsList1 (items in a row)
let listItems1 = productsList1.map((imgSrc) => {
    return `<div id="saveIcon" class="flex flex-row max-[760px]:p-2 p-4 items-start justify-start bg-white rounded-md border border-gray-300 shadow max-[370px]:gap-2 gap-[1.5rem]">
    <a href="productDetails.html" class="itemDetail" detail="${imgSrc}"> <img class="w-[15rem] p-2 max-[760px]:p-0" src="${imgSrc}"/> </a>
       <div class="flex flex-col w-[100%] gap-2 items-start justify-start">
         <h1 class="font-semibold">GoPro HERO6 4K Action Camera - Black</h1>
         <div class="flex flex-col">
           <h1 class="font-semibold">$998.00 <span class="text-gray-400 text-sm line-through max-[590px]:hidden">$1128.00</span></h1>
           <span class="max-[590px]:hidden flex flex-row gap-2 items-center justify-center">
            <span class="flex flex-row items-center justify-center">
            <i class="fa-solid fa-star fa-sm" style="color: #ffaa00;"></i>
            <i class="fa-solid fa-star fa-sm" style="color: #ffaa00;"></i>
            <i class="fa-solid fa-star fa-sm" style="color: #ffaa00;"></i>
            <i class="fa-solid fa-star fa-sm" style="color: #ffaa00;"></i>
            <i class="fa-solid fa-star fa-sm" style="color: #cbcac8;"></i>
            <p class=" text-[#ffaa00] px-[0.3rem]">7.5</p>
            </span>
            <i class="fa-solid fa-circle text-[6px]" style="color: #b0b7c4;"></i>
            <p class="text-gray-500">154 orders</p>
            <i class="fa-solid fa-circle text-[6px]" style="color: #b0b7c4;"></i>
            <p class="text-green-500">Free Shipping</p>
         </span>
         </div>
         <p class="max-[760px]:hidden text-gray-700">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit </p>
         <button class="cursor-pointer text-blue-600 hover:text-blue-800 max-[340px]:hidden">View details</button>
       </div>
       <span class="max-[590px]:hidden saveBtn px-2 py-[0.3rem] border border-gray-300 shadow rounded-md cursor-pointer text-[#1491f0]" save="${imgSrc}">
       <i class="fa-regular fa-heart fa-lg"></i>
       </span>
    </div>`;
}).join(''); 

// Create the HTML for the productsList2 (items in a col)
let listItems2 = productsList2.map((imgSrc) => {
    return `<div id="saveIcon" class="flex flex-col p-4 max-[760px]:p-2 items-center justify-center bg-white rounded-md border border-gray-300 shadow max-[690px]:gap-2 gap-[2rem]">
        <a href="productDetails.html" class="itemDetail" detail="${imgSrc}"> <img class="w-[15rem] max-[560px]:h-[rem] max-[560px]:w-[6rem] max-[760px]:p-0 p-2 h-[13rem]" src="${imgSrc}"/> </a>
        <div class="flex flex-row gap-4">
            <span class="flex flex-col">
              <h1 class="font-semibold">$998.00 <span class="text-gray-400 line-through text-sm max-[690px]:hidden">$1128.00</span></h1>
              <span class="max-[690px]:hidden flex flex-row items-center justify-start">
                <i class="fa-solid fa-star fa-sm" style="color: #ffaa00;"></i>
                <i class="fa-solid fa-star fa-sm" style="color: #ffaa00;"></i>
                <i class="fa-solid fa-star fa-sm" style="color: #ffaa00;"></i>
                <i class="fa-solid fa-star fa-sm" style="color: #ffaa00;"></i>
                <i class="fa-solid fa-star fa-sm" style="color: #cbcac8;"></i>
                <p class="text-[#ffaa00] ml-2">7.5</p>
              </span>
              <h1 class="text-gray-700 mt-2 leading-5">GoPro HERO6 4K Action Camera - Black</h1>
            </span>
            <span class="max-[690px]:hidden saveBtn w-[3rem] h-[2.5rem] p-2 border border-gray-300 shadow rounded-md cursor-pointer text-[#1491f0]" save="${imgSrc}" >
              <i class="fa-regular fa-heart fa-lg"></i>
            </span>
        </div>
    </div>`;
}).join(''); 

// Set the innerHTML of the products container
function updateList(){
  products.innerHTML = `<div class="grid ${displayRow ? 'grid-cols-1' : 'grid-cols-3'} gap-[1rem] w-[100%] h-auto">${displayRow ? listItems1 : listItems2}</div>`;
  saveItems.forEach((imgSrc) => {
    const saveBtn = document.querySelector(`.saveBtn[save="${imgSrc}"]`);
    if (saveBtn) {
      saveBtn.innerHTML = `<i class="fa-solid fa-heart fa-lg" style="color: #db0000;"></i>`;
    }
  });
}

// Function to toggle displayRow and update the product list
function toggleDisplay(isRow) {
  displayRow = isRow;
  updateList();
}

// Attach the function to the window object
toggleDisplay();

//initial rendering
updateList();

//adding items to saveList
saved.addEventListener("click", (event) => {
  if(event.target.closest('.saveBtn')) {
    let saveBtn = event.target.closest('.saveBtn')
    let newSave = saveBtn.getAttribute('save');
    if (!saveItems.includes(newSave)) {
      saveBtn.innerHTML = `<i class="fa-solid fa-heart fa-lg" style="color: #db0000;"></i>`;
      saveItems.push(newSave);
      localStorage.setItem('saveItems', JSON.stringify(saveItems));
    }else{
      saveBtn.innerHTML = `<i class="fa-regular fa-heart fa-lg"></i>`;
      // remove item if already exist
      const index = saveItems.indexOf(newSave);
      if (index > -1) {
        saveItems.splice(index, 1);
      }
      localStorage.setItem('saveItems', JSON.stringify(saveItems));
    }
  }
  // adding image in products detail page
  if(event.target.closest(".itemDetail")){
    let details = event.target.closest(".itemDetail");
    let img = details.getAttribute('detail');
    localStorage.setItem('img', JSON.stringify(img));
  }
})

// Restore saved items on page load
saveItems.forEach((imgSrc) => {
  const saveBtn = document.querySelector(`.saveBtn[save="${imgSrc}"]`);
  if (saveBtn) {
    saveBtn.innerHTML = `<i class="fa-solid fa-heart fa-lg" style="color: #db0000;"></i>`;
  }
});