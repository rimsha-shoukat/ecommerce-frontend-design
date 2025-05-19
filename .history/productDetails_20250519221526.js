let detailImg = document.getElementById('products');

// display image to details page
let image = JSON.parse(localStorage.getItem('img'));
if(image){
  detailImg.innerHTML = `<img src="${image}" class="w-[20rem]" alt="image"/>`;
}else{
  detailImg.innerHTML = `<img src="assests/item8.png" alt="img"/>`
}

// save for later
let saveItems= JSON.parse(localStorage.getItem('saveItems'));
let save = document.getElementById("saveLater");

save.addEventListener("click", (event) =>{
    if(event.target.closest(".group")){
        if (!saveItems.includes(image)) {
        save.innerHTML = `<i class="text-red-600 max-[1080px]:hidden group-hover:text-white fa-regular fa-heart fa-lg"></i>
                          <h1 class="text-red-600 group-hover:text-white">Save for later</h1>`;
        saveItems.push(image);
        localStorage.setItem('saveItems', JSON.stringify(saveItems));
        }else{
         save.innerHTML = `<i class="text-blue-600 group-hover:text-white max-[1080px]:hidden fa-regular fa-heart fa-lg"></i>
                           <h1 class="text-blue-600 group-hover:text-white">Save for later</h1>`;
        // remove item if already exist
        const index = saveItems.indexOf(image);
        if (index > -1) {
            saveItems.splice(index, 1);
        }
        localStorage.setItem('saveItems', JSON.stringify(saveItems));
        }
        }
})

// Cache nav and showNav button elements outside to avoid repeated calls
const nav = document.getElementById("nav");
const showNavBtn = document.getElementById("showNav");

// Handler to hide nav when clicking outside of nav or showNavBtn
function outsideClickListener(event) {
  if (!nav.contains(event.target) && event.target !== showNavBtn) {
    nav.style.display = "none";
    document.removeEventListener("click", outsideClickListener);
  }
}

showNavBtn.addEventListener("click", () => {
  console.log("clicked");
  if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "block"; // Show the nav
    setTimeout(() => {
      document.addEventListener("click", outsideClickListener);
    }, 0);
  } else {
    nav.style.display = "none"; // Hide the nav
    document.removeEventListener("click", outsideClickListener);
  }
});