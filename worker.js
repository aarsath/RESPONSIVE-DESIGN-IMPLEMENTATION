document.addEventListener('DOMContentLoaded', function() {

  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  
  mobileMenuBtn.addEventListener('click', function() {
      mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
  });


  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
          mobileNav.style.display = 'none';
      });
  });

  
  const tabBtns = document.querySelectorAll('.tab-btn');
  const menuCategories = document.querySelectorAll('.menu-category');
  
  tabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
         
          tabBtns.forEach(b => b.classList.remove('active'));
          menuCategories.forEach(cat => cat.classList.remove('active'));
          
          
          this.classList.add('active');
          

          const categoryId = this.getAttribute('data-category');
          document.getElementById(categoryId).classList.add('active');
      });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });

  const yearElement = document.getElementById('year');
  if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
  }


  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
      form.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Thank you for your message! This is a demo form.');
          this.reset();
      });
  });

  
  const animateOnScroll = function() {
      const elements = document.querySelectorAll('.dish-card, .testimonial-card, .menu-item');
      
      elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementPosition < windowHeight - 100) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
          }
      });
  };

  
  const animatedElements = document.querySelectorAll('.dish-card, .testimonial-card, .menu-item');
  animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });


  animateOnScroll();
  
  window.addEventListener('scroll', animateOnScroll);
});