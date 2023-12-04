
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('click', function () {
        this.classList.toggle('active');
      });
    });
    
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.querySelector('.card-container');
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
  
    scrollLeftButton.addEventListener('click', function () {
      cardContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });
  
    scrollRightButton.addEventListener('click', function () {
      cardContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const picturesContainer = document.querySelector('.picturesContainer');
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
  
    scrollLeftButton.addEventListener('click', function () {
        picturesContainer.scrollBy({ left: -250, behavior: 'smooth' });
    });
  
    scrollRightButton.addEventListener('click', function () {
        picturesContainer.scrollBy({ left: 250, behavior: 'smooth' });
    });
  });
  
  

