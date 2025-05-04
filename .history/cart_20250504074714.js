

//to add items into wishlist or saved items

let saveItems= JSON.parse(localStorage.getItem('saveItems'));

let saves = document.getElementById("itemsSaved");
if(saveItems.length > 0){
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

// cart items
// let Cart = ["assests/item1.png", "assests/item5.png", "assests/item2.png"];
// localStorage.setItem("cart", JSON.stringify(Cart));
let cart = JSON.parse(localStorage.getItem('Cart'));
let cartItems = document.getElementById("cartItems");

function moved(item){
    if(item.length > 0){
        let cartHtml = item.map((i) =>{
            return `<span class="flex flex-row items-start justify-start gap-4 border-b p-4 border-gray-300 w-[100%]">
                        <img class="w-[8rem] h-[8rem] border border-gray-300 shadow p-2 rounded-md" src="${i}" alt="img">
                        <span class="flex flex-col items-start justify-start">
                            <h1 class="text-black font-semibold text-[1.1rem]">T-shirts with multiple colors, for men and lady</h1>
                            <h1 class="text-gray-500">Size: medium, Color: blue,  Material: Plastic <br>Seller: Artel Market</h1>
                            <span class="flex flex-row gap-6 mt-4">
                                <button class="px-2 py-[0.3rem] border border-gray-300 cursor-pointer shadow rounded-md text-red-500 font-semibold hover:bg-red-500 hover:text-white">Remove</button>
                                <button class="px-2 py-[0.3rem] border border-gray-300 cursor-pointer shadow rounded-md text-blue-500 hover:bg-blue-500 hover:text-white font-semibold">Save for later</button>
                            </span>
                        </span>
                        <span class="pl-[10rem] flex flex-col gap-2 items-start justify-end">
                            <h1 class="font-semibold">$78.99</h1>
                            <div class="flex flex-row items-center justify-between px-2 py-[0.3rem] font-semibold gap-4 w-auto border border-gray-300 shadow rounded-md">
                                <h1>Qty:</h1>
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9" selected>9</option>
                                </select>
                            </div> 
                        </span>
                           </span>`
        })
        cartItems.innerHTML = cartHtml;
    }else{
        cartItems.innerHTML = `<div class="text-nowrap text-[1rem] font-bold text-red-400" >No item in cart yet!</div>`
    }
}
moved(cart);

saves.addEventListener("click", (event) => {
    if(event.target.closest(".moveToCart")){
        let src = event.target.closest(".moveToCart");
        let newItem = src.getAttribute('cart');
        if (!cart.includes(newItem)) {
            cart.push(newItem);
            const index = saveItems.indexOf(newItem);
            if (index > -1) {
                saveItems.splice(index, 1);
            }
        }else{

        }
            localStorage.setItem("Cart", JSON.stringify(cart));
            localStorage.setItem('saveItems', JSON.stringify(saveItems));
            window.location.reload();
    }
    moved(cart);
})