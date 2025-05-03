//to add items into wishlist or saved items

import {saveItems} from "./index.js";
consi
let saves = document.getElementById("itemsSaved");
let saveList = saveItems.map((Item) => {
  return `<span class="flex flex-col items-start justify-start">
            <img class="w-[14rem] border px-2 py-4 border-gray-300 shadow rounded-sm mb-4 h-[14rem]" src="${Item}" alt="image">
            <h1 class="text-[1.2rem] font-semibold">$99.50</h1>
            <h1 class="text-gray-400 leading-5">GoPro HERO6 4K Action <br> Camera - Black</h1>
            <button class="text-blue-500 rounded-sm hover:bg-blue-500 hover:text-white cursor-pointer mt-2 px-2 py-[0.3rem] border border-gray-200 shadow"><i class="fa-solid fa-cart-shopping pr-2"></i>Move to cart</button>
          </span>`;
}).join('');

saves.innerHTML = saveList;