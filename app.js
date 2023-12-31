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

const blogLinkOne = document.querySelector(".blog-page-one");
const blogLinkTwo = document.querySelector(".blog-page-two");
const dogemapPage = document.querySelector(".dogemap");
const arrowBack = document.querySelectorAll(".arrow-back");

// PAGE ONE
blogLinkOne.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("body").style.transform = "scale(0.9)";

  document.querySelector(".dogemap").style.visibility = "visible";
});

// PAGE TWO
blogLinkTwo.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("body").style.transform = "scale(0.9)";
  document.querySelector(".drc-nft").style.visibility = "visible";
});

arrowBack.forEach(function (arrow) {
  arrow.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".dogemap").style.visibility = "hidden";
    document.querySelector(".drc-nft").style.visibility = "hidden";
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

// form
const subscribeSection = document.querySelector(".subscribe-section");
const input = document.querySelector(".field");
const submitBtn = document.querySelector(".btn-form");

subscribeSection.addEventListener("click", function () {
  // input.focus();
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value.includes("@")) {
    submitBtn.textContent = "Thanks for submitting.";
    submitBtn.style.backgroundColor = "rgb(90, 87, 87)";
    subscribeSection.style.padding = "60px";
  }
});
