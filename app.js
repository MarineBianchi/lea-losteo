function toggleMenu() { var e = document.getElementById("mobile-menu"), t = document.getElementById("menu-open-icon"), l = document.getElementById("menu-close-icon"); "block" === e.style.display ? (e.style.display = "none", t.style.display = "block", l.style.display = "none") : (e.style.display = "block", t.style.display = "none", l.style.display = "block") } document.getElementById("accept-cookies").addEventListener("click", function () { document.getElementById("cookie-banner").style.display = "none" }); let lastScrollTop = 0, isScrolling; const navbar = document.getElementById("navbar"); function handleNavbarScroll() { let e = window.scrollY; e > 10 ? (navbar.classList.remove("bg-beige"), navbar.classList.add("bg-white")) : (navbar.classList.remove("bg-white"), navbar.classList.add("bg-beige")), window.clearTimeout(isScrolling), navbar.style.transform = "translateY(0)", isScrolling = setTimeout(() => { window.scrollY > 60 && (navbar.style.transform = "translateY(-100%)") }, 1200), lastScrollTop = e <= 0 ? 0 : e } window.addEventListener("scroll", handleNavbarScroll), window.addEventListener("resize", () => { window.innerWidth < 768 ? (window.removeEventListener("scroll", handleNavbarScroll), navbar.style.transform = "translateY(0)", navbar.classList.remove("bg-white", "shadow"), navbar.classList.add("bg-beige")) : window.addEventListener("scroll", handleNavbarScroll) }), document.addEventListener("DOMContentLoaded", function () { let e = document.querySelectorAll(".card"); e.forEach(e => { e.addEventListener("click", function () { this.classList.toggle("active") }) }); let t = document.querySelector(".picturesContainer"), l = document.getElementById("scroll-left2"), n = document.getElementById("scroll-right2"); l.addEventListener("click", function () { r.scrollBy({ left: -200, behavior: "smooth" }) }), n.addEventListener("click", function () { r.scrollBy({ left: 200, behavior: "smooth" }) }); let r = document.querySelector(".card-container"), o = document.getElementById("scroll-left"), s = document.getElementById("scroll-right"); o.addEventListener("click", function () { t.scrollBy({ left: -250, behavior: "smooth" }) }), s.addEventListener("click", function () { t.scrollBy({ left: 250, behavior: "smooth" }) }); let i = document.querySelector(".card-container3"), c = document.getElementById("scroll-left3"), a = document.getElementById("scroll-right3"); c.addEventListener("click", function () { i.scrollBy({ left: -250, behavior: "smooth" }) }), a.addEventListener("click", function () { i.scrollBy({ left: 250, behavior: "smooth" }) }) }), document.addEventListener("DOMContentLoaded", () => { let e = new IntersectionObserver(e => { e.forEach(e => { e.isIntersecting && e.target.classList.add("visible") }) }, { threshold: .3 }), t = document.querySelector(".SectionOpacite"); e.observe(t) }), document.addEventListener("DOMContentLoaded", () => { let e = new IntersectionObserver(e => { e.forEach(e => { e.isIntersecting && e.target.classList.add("visible") }) }, { threshold: .1 }), t = document.querySelector(".SectionOpacite1"); e.observe(t) }), document.querySelectorAll('a[href^="#"]').forEach(e => { e.addEventListener("click", function (e) { e.preventDefault(); let t = document.querySelector(this.getAttribute("href")), l = document.getElementById("navbar").offsetHeight; window.scrollTo({ top: t.offsetTop - l, behavior: "smooth" }) }) }), document.addEventListener("DOMContentLoaded", function () { let e = document.querySelector(".picturesContainer"), t = document.querySelector(".card-container"), l = document.querySelector(".card-container3"), n = document.getElementById("scroll-left"), r = document.getElementById("scroll-right"), o = document.getElementById("scroll-left2"), s = document.getElementById("scroll-right2"), i = document.getElementById("scroll-left3"), c = document.getElementById("scroll-right3"); function a(e, t, l) { let n = e.offsetWidth, r = e.scrollWidth; r <= n ? (t.style.display = "none", l.style.display = "none") : (t.style.display = "block", l.style.display = "block") } function d() { a(e, n, r), a(t, o, s), a(l, i, c) } d(), window.addEventListener("resize", d) }); let currentSlide = 0; const slides = document.querySelectorAll(".carousel-image"), indicators = document.querySelectorAll(".indicator"); function showSlide(e) { slides.forEach(e => e.style.display = "none"), indicators.forEach(e => e.classList.remove("active")), slides[e].style.display = "block", indicators[e].classList.add("active") } function setCurrentSlide(e) { showSlide(currentSlide = e) } function nextSlide() { showSlide(currentSlide = (currentSlide + 1) % slides.length) } showSlide(currentSlide), setInterval(nextSlide, 4e3);