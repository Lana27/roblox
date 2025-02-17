document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.backgroundColor = '#f0f0f0';
        });
 
        section.addEventListener('mouseout', () => {
            section.style.backgroundColor = 'white';
        });
    });
 });