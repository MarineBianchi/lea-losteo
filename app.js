

function toggleMenu() {
  var menu = document.getElementById('mobile-menu');
  var openIcon = document.getElementById('menu-open-icon');
  var closeIcon = document.getElementById('menu-close-icon');

  if (menu.style.display === 'block') {
      menu.style.display = 'none';
      openIcon.style.display = 'block';
      closeIcon.style.display = 'none';
  } else {
      menu.style.display = 'block';
      openIcon.style.display = 'none';
      closeIcon.style.display = 'block';
  }
}


// -------------------------------  Fermer cookie

document.getElementById('accept-cookies').addEventListener('click', function() {
  document.getElementById('cookie-banner').style.display = 'none';
});


// -------------------------------  NavBar disparait
let lastScrollTop = 0;
let isScrolling;
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
  const currentScroll = window.scrollY;

  if (currentScroll > 10) {
    navbar.classList.remove('bg-beige');
    navbar.classList.add('bg-white');
  } else {
    navbar.classList.remove('bg-white');
    navbar.classList.add('bg-beige');
  }


  window.clearTimeout(isScrolling);


  navbar.style.transform = 'translateY(0)';

  isScrolling = setTimeout(() => {
    if (window.scrollY > 60) {
      navbar.style.transform = 'translateY(-100%)';
    }
  }, 1200); 
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
}

// Event listeners
window.addEventListener('scroll', handleNavbarScroll);

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    window.removeEventListener('scroll', handleNavbarScroll);
    navbar.style.transform = 'translateY(0)'; 
    navbar.classList.remove('bg-white', 'shadow');
    navbar.classList.add('bg-beige');
  } else {
    window.addEventListener('scroll', handleNavbarScroll);
  }
});

// cards ----------------------------------

document.addEventListener('DOMContentLoaded', function () {

    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('click', function () {
        this.classList.toggle('active');
      });
    });
    

    const picturesContainer = document.querySelector('.picturesContainer');

    const scrollLeftButton = document.getElementById('scroll-left2');
    const scrollRightButton = document.getElementById('scroll-right2');
  
    scrollLeftButton.addEventListener('click', function () {
      cardContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });
  
    scrollRightButton.addEventListener('click', function () {
      cardContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });

    

   const cardContainer = document.querySelector('.card-container');
  
    const scrollLeftButtonCard = document.getElementById('scroll-left');
    const scrollRightButtonCard = document.getElementById('scroll-right');
  
    scrollLeftButtonCard.addEventListener('click', function () {
        picturesContainer.scrollBy({ left: -250, behavior: 'smooth' });
    });
  
    scrollRightButtonCard.addEventListener('click', function () {
        picturesContainer.scrollBy({ left: 250, behavior: 'smooth' });
    });


   const cardContainer2 = document.querySelector('.card-container3');
  
   const scrollLeftButtonCard2 = document.getElementById('scroll-left3');
   const scrollRightButtonCard2 = document.getElementById('scroll-right3');
 
   scrollLeftButtonCard2.addEventListener('click', function () {
    cardContainer2.scrollBy({ left: -250, behavior: 'smooth' });
   });
 
   scrollRightButtonCard2.addEventListener('click', function () {
    cardContainer2.scrollBy({ left: 250, behavior: 'smooth' });
   });




  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 }); 

    // Sélectionnez la section à observer
    const section = document.querySelector('.SectionOpacite');
    observer.observe(section);
});


document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.1 }); 

  const section = document.querySelector('.SectionOpacite1');
  observer.observe(section);
});



// equilibrage ancrage ------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    let target = document.querySelector(this.getAttribute('href'));
    let navbarHeight = document.getElementById('navbar').offsetHeight;

    window.scrollTo({
      top: target.offsetTop - navbarHeight,
      behavior: 'smooth'
    });
  });
});


// Faire disparaitre les flêches de scrool quand l'ecran diminue

document.addEventListener('DOMContentLoaded', function () {

  const picturesContainer = document.querySelector('.picturesContainer');
  const cardsContainer = document.querySelector('.card-container'); 
  const cardsContainer3 = document.querySelector('.card-container3'); 

  const scrollLeftButton = document.getElementById('scroll-left');
  const scrollRightButton = document.getElementById('scroll-right');

  const scrollLeftButton2 = document.getElementById('scroll-left2');
  const scrollRightButton2 = document.getElementById('scroll-right2');

  const scrollLeftButton3 = document.getElementById('scroll-left3');
  const scrollRightButton3 = document.getElementById('scroll-right3');

  function checkScrollArrows(container, leftButton, rightButton) {
    const containerWidth = container.offsetWidth;
    const contentWidth = container.scrollWidth;

    if (contentWidth <= containerWidth) {
      leftButton.style.display = 'none';
      rightButton.style.display = 'none';
    } else {
      leftButton.style.display = 'block';
      rightButton.style.display = 'block';
    }
  }

  // Vérifie les flèches pour chaque ensemble de conteneurs et de boutons
  function checkAllScrollArrows() {
    checkScrollArrows(picturesContainer, scrollLeftButton, scrollRightButton);
    checkScrollArrows(cardsContainer, scrollLeftButton2, scrollRightButton2);
    checkScrollArrows(cardsContainer3, scrollLeftButton3, scrollRightButton3); 
  }

  checkAllScrollArrows();
  window.addEventListener('resize', checkAllScrollArrows);
});


// ------------------- CAROUSSEL ---------------------

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    indicators.forEach(dot => dot.classList.remove('active'));

    slides[index].style.display = 'block';
    indicators[index].classList.add('active');
}

function setCurrentSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
showSlide(currentSlide);
setInterval(nextSlide, 4000); 

