// mobile menu toggle
const menuButton = document.querySelector('header .mobile-navs .icon');
const droplet = document.querySelector('header .mobile-navs .droplet');
const mobileNavMenus = document.querySelectorAll('header .mobile-navs li a');

const toggleMenu = ()=>{
    const menuPage = document.querySelector('header .mobile-navs .page');
    menuPage.classList.toggle('active');
    menuButton.classList.toggle('active');
    droplet.classList.toggle('active');
};
mobileNavMenus.forEach(menu => {
    menu.addEventListener('click', function(e) {
        // e.preventDefault();
        toggleMenu();
    });
});
menuButton.addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
});
droplet.addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
});

// header background change on scroll
const header = document.querySelector('header');
const headerHeight = header.clientHeight;
window.addEventListener('scroll', function() {
    if (window.scrollY > headerHeight) {
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
});


// portfolio navigation
const portfolioNavNext = document.querySelector('#portfolio .mobile-direction .next');
const portfolioNavPrev = document.querySelector('#portfolio .mobile-direction .prev');
const portfolioInterChange = (currentElement,newElement)=>{
    currentElement.removeAttribute('data-show');
    newElement.setAttribute('data-show', 'main');
    newElement.nextElementSibling ? portfolioNavNext.classList.add('active') : portfolioNavNext.classList.remove('active');
    newElement.previousElementSibling ? portfolioNavPrev.classList.add('active') : portfolioNavPrev.classList.remove('active');
}
portfolioNavNext.addEventListener('click', function(e) {
    e.preventDefault();
    if(portfolioNavNext.classList.contains('active')){
        console.log('next clicked')

        const currentShow = document.querySelector('#portfolio .portfolios .portfolio[data-show="main"]');
        const nextShow = currentShow.nextElementSibling;
        if (nextShow) {
            portfolioInterChange(currentShow,nextShow);
        }else{
            const firstShow = document.querySelector('#portfolio .portfolios .portfolio');
            portfolioInterChange(currentShow,firstShow);
        
        }
    }
});
portfolioNavPrev.addEventListener('click', function(e) {
    e.preventDefault();
    if(portfolioNavPrev.classList.contains('active')){
        console.log('prev clicked')
        const currentShow = document.querySelector('#portfolio .portfolios .portfolio[data-show="main"]');
        const prevShow = currentShow.previousElementSibling;
        if (prevShow) {
            portfolioInterChange(currentShow,prevShow);
        }else{
            const lastShow = document.querySelector('#portfolio .portfolios .portfolio:last-child');
            portfolioInterChange(currentShow,lastShow);
        }
    }
});

// reviews navigation

const reviewNavNext = document.querySelector('#reviews .mobile-direction .next');
const reviewNavPrev = document.querySelector('#reviews .mobile-direction .prev');
const reviewNavNextDesktop = document.querySelector('#reviews .direction .next');
const reviewNavPrevDesktop = document.querySelector('#reviews .direction .prev');
const reviewInterChange = (currentElement,newElement)=>{
    currentElement.removeAttribute('data-show');
    newElement.setAttribute('data-show', 'main');
    newElement.nextElementSibling?.classList?.contains('review') ? reviewNavNext.classList.add('active') : reviewNavNext.classList.remove('active');
    newElement.previousElementSibling?.classList?.contains('review') ? reviewNavPrev.classList.add('active') : reviewNavPrev.classList.remove('active');
    newElement.nextElementSibling?.classList?.contains('review') ? reviewNavNextDesktop.classList.add('active') : reviewNavNextDesktop.classList.remove('active');
    newElement.previousElementSibling?.classList?.contains('review') ? reviewNavPrevDesktop.classList.add('active') : reviewNavPrevDesktop.classList.remove('active');
};
// mobile navigation

reviewNavNext.addEventListener('click', function(e) {
    e.preventDefault();
    if(reviewNavNext.classList.contains('active')){
        console.log('next clicked')
        const currentShow = document.querySelector('#reviews .reviews .review[data-show="main"]');
        const nextShow = currentShow.nextElementSibling;
        if (nextShow) {
            reviewInterChange(currentShow,nextShow);
        }else{
            const firstShow = document.querySelector('#reviews .reviews .review');
            reviewInterChange(currentShow,firstShow);
        
        }
    }
});
reviewNavPrev.addEventListener('click', function(e) {
    e.preventDefault();
    if(reviewNavPrev.classList.contains('active')){
        console.log('prev clicked')
        const currentShow = document.querySelector('#reviews .reviews .review[data-show="main"]');
        const prevShow = currentShow.previousElementSibling;
        if (prevShow) {
            reviewInterChange(currentShow,prevShow);
        }else{
            const lastShow = document.querySelector('#reviews .reviews .review:last-child');
            reviewInterChange(currentShow,lastShow);
        }
    }
});

reviewNavNextDesktop.addEventListener('click', function(e) {
    e.preventDefault();
    if(reviewNavNextDesktop.classList.contains('active')){
        console.log('next clicked')
        const currentShow = document.querySelector('#reviews .reviews .review[data-show="main"]');
        const nextShow = currentShow.nextElementSibling;
        if (nextShow) {
            reviewInterChange(currentShow,nextShow);
        }else{
            const firstShow = document.querySelector('#reviews .reviews .review');
            reviewInterChange(currentShow,firstShow);
        
        }
    }
});
reviewNavPrevDesktop.addEventListener('click', function(e) {
    e.preventDefault();
    if(reviewNavPrevDesktop.classList.contains('active')){
        console.log('prev clicked')
        const currentShow = document.querySelector('#reviews .reviews .review[data-show="main"]');
        const prevShow = currentShow.previousElementSibling;
        if (prevShow) {
            reviewInterChange(currentShow,prevShow);
        }else{
            const lastShow = document.querySelector('#reviews .reviews .review:last-child');
            reviewInterChange(currentShow,lastShow);
        }
    }
});






// portfolio filter
const filters = document.querySelectorAll('#portfolio .filters .filter');
filters.forEach(filter => {
    filter.addEventListener('click', function(e) {
        e.preventDefault();
        filters.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        const filter = this.getAttribute('data-category');
        const items = document.querySelectorAll('#portfolio .portfolios .portfolio');
        items.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (filter === itemCategory) {
                item.setAttribute('data-show', 'main');
            }else{
                const currentlyActive = item.getAttribute('data-show');
                if (currentlyActive=='main') {
                    item.removeAttribute('data-show');
                }
            }
        });
    });
});





// form validation
const form = document.querySelector('form');
// on onkeyup remove error message
form.addEventListener('keyup', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        e.target.classList.remove('error');
    }
});
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('form input[name="name"]').value;
    const email = document.querySelector('form input[name="email"]').value;
    const message = document.querySelector('form textarea[name="message"]').value;
    if (name.trim() === '') {
        
    }
    if (email.trim() === '') {
        alert('Email is required');
        return;
    }
    if (message.trim() === '') {
        alert('Message is required');
        return;
    }
    alert('Form submitted successfully');
    form.reset();
});
















