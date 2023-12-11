
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('click', function () {
        this.classList.toggle('active');
      });
    });
    

    const picturesContainer = document.querySelector('.picturesContainer');

    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
  
    scrollLeftButton.addEventListener('click', function () {
      cardContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });
  
    scrollRightButton.addEventListener('click', function () {
      cardContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });

    

   const cardContainer = document.querySelector('.card-container');
  
    const scrollLeftButtonCard = document.getElementById('scroll-left2');
    const scrollRightButtonCard = document.getElementById('scroll-right2');
  
    scrollLeftButtonCard.addEventListener('click', function () {
        picturesContainer.scrollBy({ left: -250, behavior: 'smooth' });
    });
  
    scrollRightButtonCard.addEventListener('click', function () {
        picturesContainer.scrollBy({ left: 250, behavior: 'smooth' });
    });



  });
  
