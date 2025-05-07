document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    let index = 0;
  
    function showSlide(i) {
      index = (i + dots.length) % dots.length;
      slides.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }
  
    dots.forEach(dot => {
      dot.addEventListener('click', () => showSlide(parseInt(dot.dataset.index)));
    });
  
    // Auto-Advance alle 5 Sekunden
    setInterval(() => showSlide(index + 1), 5000);
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const car = document.querySelector('.hero-car');
    window.addEventListener('scroll', () => {
      // ab einer Scroll-Position von 100px (Beispiel) rausfahren
      if (window.scrollY > 100) {
        car.classList.add('scrolled-away');
      } else {
        car.classList.remove('scrolled-away');
      }
    });
  });
  