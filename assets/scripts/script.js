const menuButton = document.querySelector('header .mobile-navs .icon');
const droplet = document.querySelector('header .mobile-navs .droplet');
const toggleMenu = ()=>{
    const menuPage = document.querySelector('header .mobile-navs .page');
    menuPage.classList.toggle('active');
    menuButton.classList.toggle('active');
    droplet.classList.toggle('active');
};
menuButton.addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
});
droplet.addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
});


const filters = document.querySelectorAll('#portfolio .filters .filter');
// add even listener to each filter
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
















