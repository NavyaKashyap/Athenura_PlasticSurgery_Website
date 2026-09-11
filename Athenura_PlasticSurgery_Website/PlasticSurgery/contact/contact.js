    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Form Submission Alert
    document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const alertBox = document.getElementById('statusAlert');
      alertBox.style.display = 'block';
      this.reset();

      setTimeout(() => {
        alertBox.style.display = 'none';
      }, 5000);
    });

    // Numerical Stats Counter Animation
    const counters = document.querySelectorAll('.counter');
    let hasAnimated = false;

    function runCounterAnimation() {
      const statsSection = document.querySelector('.stats-strip');
      if (!statsSection) return;

      const rect = statsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80 && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1800;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.innerText = target >= 1000 ? (target / 1000) + 'k' : target;
              clearInterval(timer);
            } else {
              counter.innerText = target >= 1000 ? (Math.floor(current) / 1000).toFixed(1) + 'k' : Math.floor(current);
            }
          }, stepTime);
        });
      }
    }

    window.addEventListener('scroll', runCounterAnimation);
    window.addEventListener('load', runCounterAnimation);