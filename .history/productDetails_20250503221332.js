let detailImg = document.getElementById('products');

let image = JSON.parse(localStorage.getItem('img'));
if(image){
  detailImg.innerHTML = `<img src="${image}" class="w-[20rem]" alt="image"/>`;
}else{
  detailImg.innerHTML = `<img src="assests/item8.png" alt="img"/>`
}

let save = document.getElementById("saveLater");
save.addEventListener("click", (event) =>{
    if(event.target.closest == (".fa-heart")){
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
})