const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: false, 
    },
  },
});

  const nav = document.querySelector(".navlist")
  const menuBtn = document.querySelector(".hamburger i")
  const header = document.querySelector(".header")

  menuBtn.addEventListener("click", () =>{
 
    menuBtn.className === "fa-solid fa-close" ? ( 
      nav.classList.remove("active"),
      menuBtn.setAttribute("class", "fa-solid fa-bars")
      ) : (
        nav.classList.add("active"),
        menuBtn.setAttribute("class", "fa-solid fa-close")
       )
  })

window.onscroll = ()=>{
  if(window.scrollY >= 50){
    header.style.backgroundColor = "white"
  }else{
    header.style.backgroundColor = "transparent"
  }
}