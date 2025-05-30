const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Check saved preference and apply on page load
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    toggleBtn.textContent = '🌙';
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Animate skill bars when Skills section is in view
function animateSkills() {
    const skillsSection = document.getElementById('skills');
    const skillFills = document.querySelectorAll('.skill-fill');
  
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
  
    if (sectionPos < screenPos - 100) {
      skillFills.forEach(bar => {
        const fillWidth = bar.getAttribute('data-fill');
        bar.style.width = fillWidth;
      });
      window.removeEventListener('scroll', animateSkills); // Animate once only
    }
  }
  
  window.addEventListener('scroll', animateSkills);