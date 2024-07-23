function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  const fadeIns = document.querySelectorAll('.fade-in');
  
  function fadeInOnScroll() {
    fadeIns.forEach(fadeIn => {
      if (isElementInViewport(fadeIn)) {
        fadeIn.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', fadeInOnScroll);
  