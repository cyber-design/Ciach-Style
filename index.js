const header = document.getElementById('header');
const svg = document.getElementById('svg-logo');
console.log(svg)
window.addEventListener('scroll', function () {
    const pageOffset = window.pageYOffset;
    if (pageOffset === 0) {
        header.style.height = 7 + 'rem';
        header.style.paddingTop = 1 + 'rem';
        header.style.paddingBottom = 1 + 'rem';
        svg.style.width = 60 + 'pt';
        svg.style.height = 60 + 'pt';
    } else {
        header.style.height = 4 + 'rem';
        header.style.paddingTop = 0.25 + 'rem';
        header.style.paddingBottom = 0;
        svg.style.width = 40 + 'pt';
        svg.style.height = 40 + 'pt';
    }
})