// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: stop observing once activated to keep elements visible
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Global reveal elements
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));

  // Staggered card reveals
  const cards = document.querySelectorAll('.reveal-card');
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Triangle SVG animation trigger
  const triangleContainer = document.querySelector('.triangle-container');
  if (triangleContainer) {
    const triangleObserverOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    
    const triangleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, triangleObserverOptions);
    
    triangleObserver.observe(triangleContainer);
  }

});
