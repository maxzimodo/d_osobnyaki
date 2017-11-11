window.addEventListener("load", function(){
    var load_screen = document.getElementById("load_screen");
    load_screen.style = 'opacity: 0;';
    function removePreloader() {
        document.body.removeChild(load_screen);
    }
    var transitionTime = parseFloat(window.getComputedStyle(load_screen,null).getPropertyValue("transition-duration")) * 1000;
    setTimeout(removePreloader, transitionTime);
});

//submenu show
function showMenu() {
    document.getElementById("sub-menu").classList.toggle("show");
}
window.onclick = function(e) {
    if (!e.target.matches('#dropbtn')) {
        var subMenu = document.getElementById("sub-menu");
        if (subMenu.classList.contains('show')) {
            subMenu.classList.remove('show');
        }
    }
};

$('.grid').masonry();

$(document).ready(function() {

    $("a.grouped_elements").fancybox({
        'overlayShow' : true,
        'overlayColor' : '#000000',
        'overlayOpacity': 0.9,
    });

});