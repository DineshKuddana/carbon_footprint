// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('learn-more-btn').addEventListener('click', function () {
    alert('Learn more button clicked!');
});


document.getElementById('calculator-btn').addEventListener('click', function () {
    window.open('https://example.com/calculator', '_blank');
    
});

