const sections = $('section');
const navItems = $('.nav-item');
const navHeight = $('header').outerHeight();
const offset = 100;

$(window).on('scroll', function () {
    const scrollPosition = $(window).scrollTop() + navHeight;

    let activeSectionIndex = 0;

    sections.each(function(i) {
        const section = $(this);
        const sectionTop = section.offset().top - offset;
        const sectionBottom = sectionTop + section.outerHeight();

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSectionIndex = i;
            return false;
        }
    });

    navItems.removeClass('active');
    $(navItems[activeSectionIndex]).addClass('active');
});



const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
    
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}

const accords = document.querySelectorAll('.accordion');

accords.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const accordContent = accordion.querySelector('.accordion-content');
        accordContent.classList.toggle('active')
    })
})

$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x')
    });

    ScrollReveal().reveal('#navbar', {
        origin:'top',
        duration: 2000,
        distance: '60%'
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 3000,
        distance: '20%'
    });

    ScrollReveal().reveal('.shape', {
        origin: 'left',
        duration: 3000,
        distance: '5%'
    });

    ScrollReveal().reveal('#banner', {
        origin: 'right',
        duration: 3000,
        distance: '10%'
    });

    ScrollReveal().reveal('#whatis', {
        origin: 'left',
        duration: 3000,
        distance: '20%'
    })

    ScrollReveal().reveal('#container_tab', {
        origin: 'top',
        duration: 3000,
        distance: '20%'
    })

    ScrollReveal().reveal('#container_accord', {
        origin: 'top',
        duration: 3000,
        distance: '5%'
    })

    ScrollReveal().reveal('.swiper', {
        origin: 'left',
        duration: 3000,
        distance: '20%'
    })

    ScrollReveal().reveal('#combo', {
        origin: 'left',
        duration: 3000,
        distance: '20%'
    })
});

var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 18
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 18
        },
        1188: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
});