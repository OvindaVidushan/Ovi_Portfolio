// Toggle menu/navbar script
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/* scroll sections avtive link*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        };
    });
    // Sticky navbar
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//scroll reveal

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });   
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ScrollReveal for Education Timeline
ScrollReveal().reveal('.timeline-item', {
    origin: 'left',
    distance: '50px',
    duration: 2000,
    interval: 200
});

// ScrollReveal for Certification Boxes
ScrollReveal().reveal('.cert-box', {
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    interval: 200
});

// typed js
const typed =new Typed('.multiple-text', {
    strings: ['Python Developer', 'Web Developer', 'Business Analyst','Data Analyst'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// ScrollReveal for Experience Timeline
ScrollReveal().reveal('.experience .timeline-item', {
    origin: 'left',
    distance: '50px',
    duration: 2000,
    interval: 200
});

// Projects Filter
const projectButtons = document.querySelectorAll('#projects .filter-btn');
const projectItems = document.querySelectorAll('#projects .projects-box');

projectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        projectButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        projectItems.forEach(item => {
            if(filter === 'all' || item.getAttribute('data-category') === filter){
                item.style.display = 'block';
                item.style.opacity = '1';
                item.style.transition = 'all 0.5s ease';
            } else {
                item.style.opacity = '0';
                setTimeout(()=>{ item.style.display='none'; }, 500);
            }
        });
    });
});

// Certifications Filter
const certButtons = document.querySelectorAll('#certifications .filter-btn');
const certItems = document.querySelectorAll('#certifications .cert-box');

certButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        certButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        certItems.forEach(item => {
            if(filter === 'all' || item.getAttribute('data-category') === filter){
                item.style.display = 'flex';
                item.style.opacity = '1';
                item.style.transition = 'all 0.5s ease';
            } else {
                item.style.opacity = '0';
                setTimeout(()=>{ item.style.display='none'; }, 500);
            }
        });
    });
});