let lastScroll = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset

  if (currentScroll > lastScroll) {
    navbar.style.transform = "translateY(-100%)"
  } else {
    navbar.style.transform = "translateY(0)"
  }

  lastScroll = currentScroll
})
