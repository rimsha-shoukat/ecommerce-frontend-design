// remove all items from cart
let removeAllItems = document.getElementById("cart");
let removeBtn = document.getElementsByClassName("removeAll")[0];

//to add items into wishlist or saved items
let saveItems= JSON.parse(localStorage.getItem('saveItems'));
let saves = document.getElementById("itemsSaved");

// add items to cart
let cart = JSON.parse(localStorage.getItem('Cart'));
let cartItems = document.getElementById("cartItems");

// save items html
function saved(saveItems){
    if(saveItems.length > 0){
        let saveList = saveItems.map((Item) => {
            return `<span class="flex flex-col items-start justify-start">
                      <img class="w-[14rem] max-[970px]:w-[6rem] max-[970px]:h-[6rem] border px-2 py-4 border-gray-300 shadow rounded-sm mb-4 h-[14rem]" src="${Item}" alt="image">
                      <h1 class="text-[1.2rem] font-semibold">$99.50</h1>
                      <h1 class="text-gray-400 leading-5 max-[970px]:text-xs">GoPro HERO6 4K Action <br> Camera - Black</h1>
                      <button cart="${Item}" class="moveToCart text-blue-500 max-[970px]:text-xs rounded-sm hover:bg-blue-500 hover:text-white cursor-pointer mt-2 px-2 py-[0.3rem] border border-gray-200 shadow"><i class="fa-solid fa-cart-shopping pr-2"></i>Move to cart</button>
                    </span>`;
          }).join('');
          
          saves.innerHTML = saveList;
    }else{
        saves.innerHTML = `<div class="text-nowrap text-[1rem] font-bold text-red-400" >No item saved yet!</div>`;
    }
}
saved(saveItems);

//items to cart html
function moved(item){
    if(item.length > 0){
        let cartHtml = item.map((i) =>{
            return `<span class="flex flex-row max-[680px]:flex-col items-start justify-between border-b p-4 max-[1020px]:p-0 border-gray-300 w-[100%]">
                        <span class="flex flex-row items-center justify-center gap-4">
                        <img class="w-[8rem] h-[8rem] max-[480px]:w-[5rem] max-[480px]:h-[5rem] border border-gray-300 shadow p-2 rounded-md" src="${i}" alt="img">
                        <span class="flex flex-col items-start justify-start">
                            <h1 class="text-black font-semibold text-[1.1rem] max-[480px]:text-sm">T-shirts with multiple colors, for men and lady</h1>
                            <h1 class="max text-gray-500 text-nowrap max-[480px]:text-sm">Size: medium, Color: blue,  Material: Plastic <br>Seller: Artel Market</h1>
                            <span class="flex flex-row gap-6 mt-4">
                                <button remove="${i}" class="remove px-2 max-[480px]:text-sm py-[0.3rem] border border-gray-300 cursor-pointer shadow rounded-md text-red-500 font-semibold hover:bg-red-500 hover:text-white">Remove</button>
                                <button save="${i}" class="save px-2 max-[480px]:text-sm py-[0.3rem] border border-gray-300 cursor-pointer shadow rounded-md text-blue-500 hover:bg-blue-500 hover:text-white font-semibold text-nowrap">Save for later</button>
                            </span>
                        </span>
                        </span>
                        <span class="flex flex-col max-[680px]:flex-row-reverse max-[680px]:w-[100%] max-[680px]:justify-between max-[680px]:text-[1.3rem] max-[480px]:text-sm gap-2 items-start justify-end">
                            <h1 class="font-semibold">$78.99</h1>
                            <div class="flex flex-row items-center justify-between px-2 py-[0.3rem] max-[680px]:px-4 font-semibold gap-4 max-[680px]:gap-6 w-auto border border-gray-300 shadow rounded-md">
                                <h1>Qty:</h1>
                                <select>
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
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

// check if the cart is empty
function removeAllBtn(cart){
    if(cart.length > 0){
        removeBtn.innerHTML = `<button class="px-2 py-[0.3rem] border border-gray-300 rounded-md font-semibold shadow cursor-pointer text-blue-500 hover:text-red-500">Remove all</button>`;
    }else{
        removeBtn.innerHTML = ``;
    }
}
removeAllBtn(cart);

// save items
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
            localStorage.setItem("Cart", JSON.stringify(cart));
            localStorage.setItem('saveItems', JSON.stringify(saveItems));
            moved(cart);
            saved(saveItems);
            removeAllBtn(cart);
        }else{
            alert("Already in cart");
        }
    }
})

// add items to cart
cartItems.addEventListener("click", (event) => {
    if(event.target.closest(".remove")){
        let removed = event.target.closest(".remove");
        let removeItem = removed.getAttribute('remove');
        cart =  cart.filter(function(item) {
            return item !== removeItem
        })
          localStorage.setItem("Cart", JSON.stringify(cart));
          moved(cart);
          saved(saveItems);
          removeAllBtn(cart);
    }else if(event.target.closest(".save")){
        let save = event.target.closest(".save");
        let saveItem = save.getAttribute('save');
        if (!saveItems.includes(saveItem)) {
            saveItems.push(saveItem);
            localStorage.setItem('saveItems', JSON.stringify(saveItems));
            moved(cart);
            saved(saveItems);
            removeAllBtn(cart);
          }else{
            alert("Already in saveItems");
          }
    }
})

// remove all items to cart
removeAllItems.addEventListener("click", (event) => {
    if(event.target.closest(".removeAll")){
        cart.splice(0, cart.length);
        localStorage.setItem("Cart", JSON.stringify(cart));
        moved(cart);
        saved(saveItems);
        removeAllBtn(cart);
    }
})
 