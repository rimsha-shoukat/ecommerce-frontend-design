let detailImg = document.getElementById('products');

let image = JSON.parse(localStorage.getItem('img'));
if(image){
//   detailImg.innerHTML = `<img src="${image}" alt="image"/>`;
detailImg.innerHTML = `<img src="assests/item8.png" alt="img"/>`;

}else{
//   detailImg.innerHTML = `<img src="assests/item8.png" alt="img"/>`;
}
console.log(image);