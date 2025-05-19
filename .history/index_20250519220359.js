// display image details
document.getElementById("mainSection").addEventListener("click", (event) => {
  const anchor = event.target.closest("a");
  if (anchor && anchor.hasAttribute("src") && anchor.href.includes("productDetails.html")) {
    const imgSrc = anchor.getAttribute("src");
    localStorage.setItem("img", JSON.stringify(imgSrc));
  }
});

// show or hide nav
document.getElementById("showNav").addEventListener("click", () => {
  console.log("clicked");
  const nav = document.getElementById("nav");

  if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "block"; // Show the nav
  } else {
    nav.style.display = "none"; // Hide the nav
  }
});