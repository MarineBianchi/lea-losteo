
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
  
