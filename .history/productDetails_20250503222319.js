let detailImg = document.getElementById('products');

let image = JSON.parse(localStorage.getItem('img'));
if(image){
  detailImg.innerHTML = `<img src="${image}" class="w-[20rem]" alt="image"/>`;
}else{
  detailImg.innerHTML = `<img src="assests/item8.png" alt="img"/>`
}
savefor later
let saveItems= JSON.parse(localStorage.getItem('saveItems'));
let save = document.getElementById("saveLater");
save.addEventListener("click", (event) =>{
    if(event.target.closest == (".fa-heart")){
        if (!saveItems.includes(image)) {
        save.innerHTML = `<i class="text-red-600 fa-regular fa-heart fa-lg"></i>
                          <h1 class="text-red-600">Save for later</h1>`;
        saveItems.push(image);
        localStorage.setItem('saveItems', JSON.stringify(saveItems));
        }else{
         save.innerHTML = `<i class="text-red-600 fa-regular fa-heart fa-lg"></i>
                          <h1 class="text-red-600">Save for later</h1>`;
        // remove item if already exist
        const index = saveItems.indexOf(image);
        if (index > -1) {
            saveItems.splice(index, 1);
        }
        localStorage.setItem('saveItems', JSON.stringify(saveItems));
        }
        }
})