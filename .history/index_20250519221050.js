// display image details
document.getElementById("mainSection").addEventListener("click", (event) => {
  const anchor = event.target.closest("a");
  if (anchor && anchor.hasAttribute("src") && anchor.href.includes("productDetails.html")) {
    const imgSrc = anchor.getAttribute("src");
    localStorage.setItem("img", JSON.stringify(imgSrc));
  }
});

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

    // Add document click listener to hide nav if click outside
    setTimeout(() => {
      document.addEventListener("click", outsideClickListener);
    }, 0);

  } else {
    nav.style.display = "none"; // Hide the nav
    // Remove the outside click listener if nav hidden by button click
    document.removeEventListener("click", outsideClickListener);
  }
});

