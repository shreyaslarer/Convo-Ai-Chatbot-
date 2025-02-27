document.addEventListener('DOMContentLoaded', () => {
    // Select all sections with the animate-section class
    const sections = document.querySelectorAll('.animate-section');
  
    // Intersection Observer setup
    const observerOptions = {
      root: null, // Use viewport as root
      threshold: 0.15, // Trigger when 15% of section is visible
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);
  
    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section);
    });
  
    // Initial check for sections already in view
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add('visible');
      }
    });
  });