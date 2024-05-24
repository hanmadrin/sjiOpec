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




















// scroll to bottom
function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}
// scrollToBottom();
// scrollToBottom();
// scrollToBottom();
// scrollToBottom();
// scrollToBottom();
console.log('scrolling to bottom');
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
// (async () => {
//     let working = true;
//     // on scroll up, stop the auto scroll
//     lastScrollTop = 0;
//     window.addEventListener('scroll', function() {
//         let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         if (currentScrollTop < lastScrollTop) {
//             console.log('up');
//             working = false;
//         }else{
//             working = true;
//         }
//         lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
//     });
//     while(true) {
//         if(working){
//             await sleep(500);
//             scrollToBottom();

//         }else{
//             await sleep(1000);
//         }
        
//     }
// })();