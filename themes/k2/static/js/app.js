(function() {

    let calculateHeight = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    calculateHeight();
})(); 

littlefoot.default({
    buttonTemplate: '<button aria-controls="fncontent:<%= id %>" aria-expanded="false" aria-label="Footnote <%= number %>" class="littlefoot-footnote__button" id="<%= reference %>" rel="footnote" title="See Footnote <%= number %>" /> <%= number %> </button>'
});
