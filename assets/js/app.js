const humberger = document.querySelector('.humberger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

humberger.addEventListener("click", () => {
	navlinks.classList.toggle("open");
});

jQuery(document).ready(function($) {
            jQuery('.counter-value').counterUp({
                delay: 10,
                time: 1000
            });
        });

jQuery('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})