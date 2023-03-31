//Sleep function

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//Navbar Scroll Spy

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".navbar-item");
var page = document.getElementById("page-container");
function scrollSpy() {
  sections.forEach((section, index) => {
    const top = section.offsetTop;
    if (top <= page.scrollTop) {
      navItems.forEach((item) => {
        item.classList.remove("navbar-item-active");
      });
      navItems[index].classList.add("navbar-item-active");
    }
  });
}

window.onload = function () {
  page.addEventListener("scroll", scrollSpy);
};

//Scroll to Tickets function

function scrollToTickets() {
  const section = document.getElementById("Tickets");
  section.scrollIntoView({ behavior: "smooth" });
}

//Scrolling ability with arrows

function ArrowUp() {
  for (var section of Array.from(sections).reverse()) {
    const actual = page.scrollTop;
    if (section.offsetTop < actual) {
      page.scrollTo({ top: section.offsetTop, behavior: "smooth" });
      break;
    } else {
      page.scrollTo({
        top: sections[sections.length - 1].offsetTop,
        behavior: "smooth",
      });
    }
  }
}
function ArrowDown() {
  for (var section of sections) {
    const actual = page.scrollTop;
    if (section.offsetTop > actual) {
      page.scrollTo({ top: section.offsetTop, behavior: "smooth" });
      break;
    } else {
      page.scrollTo({ top: sections[0].offsetTop, behavior: "smooth" });
    }
  }
}

//Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar-links");
const links = document.querySelectorAll(".navbar-item");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

//Preloader

const preloader = document.getElementById("preloader-bg");
window.addEventListener("load", () => {
  sleep(3000).then(() => {
    preloader.classList.add("hidden");
  });
});

//Clock

function showTime() {
  var endDate = new Date("2023-05-11 20:00:00");
  var now = new Date();
  var timeRemaining = endDate.getTime() - now.getTime();

  var timeArray = [];
  timeArray.push(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
  timeArray.push(Math.floor((timeRemaining / (1000 * 60 * 60)) % 24));
  timeArray.push(Math.floor((timeRemaining / 1000 / 60) % 60));
  timeArray.push(Math.floor((timeRemaining / 1000) % 60));

  var spanArrays = [];
  spanArrays.push(document.getElementById("day"));
  spanArrays.push(document.getElementById("hour"));
  spanArrays.push(document.getElementById("minute"));
  spanArrays.push(document.getElementById("second"));

  for (var i = 0; i < timeArray.length; i++) {
    if (timeArray[i] < 10) {
      spanArrays[i].innerHTML = "0" + timeArray[i];
    } else {
      spanArrays[i].innerHTML = timeArray[i];
    }
  }

  setTimeout(showTime, 1000);
}
showTime();
