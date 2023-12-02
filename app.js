// Set the default tab to "DRC" on page load
document.addEventListener("DOMContentLoaded", function () {
  openTab("drc");
});

function openTab(tabName) {
  // Hide all tab contents
  var tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach(function (content) {
    content.style.display = "none";
  });

  // Deactivate all tabs
  var tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab) {
    tab.classList.remove("active");
  });

  // Show the selected tab content
  document.getElementById(tabName + "Content").style.display = "block";

  // Activate the selected tab
  document
    .querySelector('.tab[data-tab="' + tabName + '"]')
    .classList.add("active");
}

const blogLinks = document.querySelectorAll(".blog-page");

blogLinks.forEach(function (blogLink) {
  blogLink.addEventListener("click", function () {
    document.querySelector("body").style.transform = "scale(0.9)";
    document.querySelector("body").style.opacity = "0";
    // gsap.to("body", {
    //   transform: scale(0.5),
    //   opacity: 0,
    //   delay: 5,
    //   duration: 5,
    // });
  });
});

const main = document.querySelector(".main");

document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    ".p-main",
    {
      opacity: 0,
      backgroundColor: "gray",
      color: "gray",
      delay: 0.7,
    },
    {
      opacity: 1,
      backgroundColor: "white",
      color: "black",
      ease: "back.out(1.7)",
      duration: 10,
    }
  );
});
