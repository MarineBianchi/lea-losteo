

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

  // Clear timeout throughout the scroll
  window.clearTimeout(isScrolling);

  // Show navbar when scrolling
  navbar.style.transform = 'translateY(0)';

  // Hide navbar after a brief delay of no scrolling
  isScrolling = setTimeout(() => {
    if (window.scrollY > 60) {
      navbar.style.transform = 'translateY(-100%)';
    }
  }, 1200); // Adjust the time (1500ms) to your liking

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}

// Event listeners
window.addEventListener('scroll', handleNavbarScroll);

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    window.removeEventListener('scroll', handleNavbarScroll);
    navbar.style.transform = 'translateY(0)'; // Always show navbar on mobile
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



  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 }); // Ajustez le seuil selon vos besoins

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
  }, { threshold: 0.1 }); // Ajustez le seuil selon vos besoins

  // Sélectionnez la section à observer
  const section = document.querySelector('.SectionOpacite1');
  observer.observe(section);
});



// equilibrage ancrage

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
  const scrollLeftButton = document.getElementById('scroll-left');
  const scrollRightButton = document.getElementById('scroll-right');

  function checkScrollArrows() {
    const containerWidth = picturesContainer.offsetWidth;
    const contentWidth = picturesContainer.scrollWidth;

    if (contentWidth <= containerWidth) {
      scrollLeftButton.style.display = 'none';
      scrollRightButton.style.display = 'none';
    } else {
      scrollLeftButton.style.display = 'block';
      scrollRightButton.style.display = 'block';
    }
  }
  checkScrollArrows();
  window.addEventListener('resize', checkScrollArrows);
});