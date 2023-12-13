
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

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
let isScrolling;

function adjustNavbarOnScroll() {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop && currentScroll > 60) {
    // Scrolling Down
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling Up or Not Scrolling
    navbar.style.transform = 'translateY(0)';
  }

  // Set a timeout to hide the navbar after some time of no scrolling
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    if (currentScroll > 60) {
      navbar.style.transform = 'translateY(-100%)';
    }
  }, 1500); // Adjust the time (1500ms) to your liking

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}

// Event listeners
if (window.innerWidth >= 768) {
  window.addEventListener('scroll', adjustNavbarOnScroll);
}

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    window.removeEventListener('scroll', adjustNavbarOnScroll);
    navbar.style.transform = 'translateY(0)'; // Always show navbar on mobile
  } else {
    window.addEventListener('scroll', adjustNavbarOnScroll);
  }
});


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
  
