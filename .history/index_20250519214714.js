// display image details
document.getElementById("mainSection").addEventListener("click", (event) => {
  const anchor = event.target.closest("a");
  if (anchor && anchor.hasAttribute("src") && anchor.href.includes("productDetails.html")) {
    const imgSrc = anchor.getAttribute("src");
    localStorage.setItem("img", JSON.stringify(imgSrc));
  }
});

// show or hide nav
let show = false;
document.getElementById("showNav").addEventListener("click", () => {
  console.log("clicked")
   if(show){
    show = false;
    
   }else{
    show = true;
   }
   
})

function display(){
  if(show){
    document.getElementById("nav").style.display = "hidden";
  }else{
    document.getElementById("nav").style.display = "block";
  }
}