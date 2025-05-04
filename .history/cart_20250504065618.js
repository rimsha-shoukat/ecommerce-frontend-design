//to add items into wishlist or saved items

let saveItems= JSON.parse(localStorage.getItem('saveItems'));

let saves = document.getElementById("itemsSaved");
if(saveItems){
    let saveList = saveItems.map((Item) => {
        return `<span class="flex flex-col items-start justify-start">
                  <img class="w-[14rem] border px-2 py-4 border-gray-300 shadow rounded-sm mb-4 h-[14rem]" src="${Item}" alt="image">
                  <h1 class="text-[1.2rem] font-semibold">$99.50</h1>
                  <h1 class="text-gray-400 leading-5">GoPro HERO6 4K Action <br> Camera - Black</h1>
                  <button cart="${Item}" class="moveToCart text-blue-500 rounded-sm hover:bg-blue-500 hover:text-white cursor-pointer mt-2 px-2 py-[0.3rem] border border-gray-200 shadow"><i class="fa-solid fa-cart-shopping pr-2"></i>Move to cart</button>
                </span>`;
      }).join('');
      
      saves.innerHTML = saveList;
}else{
    saves.innerHTML = `<div class="text-nowrap text-[1rem] font-bold text-red-400" >No item saved yet!</div>`;
}

let cart = ["assests/item1.png", "assests/item5.png", "assests/item2.png"];

let cartItems = document.getElementById("cartItems");
function moved()

saves.addEventListener("click", (event) => {
    if(event.target.closest(".moveToCart")){
        let src = event.target.closest(".moveToCart");
        let newItem = src.getAttribute('cart');
            cart.push(newItem);
            const index = saveItems.indexOf(newItem);
            if (index > -1) {
                saveItems.splice(index, 1);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            localStorage.setItem('saveItems', JSON.stringify(saveItems));
    }
    

    window.location.reload();
})