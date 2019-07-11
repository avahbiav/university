/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/**************************************/
/*      SMOOTH SCROLL FUNCTION        */
/**************************************/
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: target.offset().top - 0 + 'px'
          }, 1500);
            return false;
          }
        }
    });
});

/**************************************/
/*      GO TO TOP SCROLL FUNCTION        */
/**************************************/
document.addEventListener('scroll', function() {
  if(scrollY > 400) {
    document.getElementById('goToTopBtn').classList.add('active');
  } else {
    document.getElementById('goToTopBtn').classList.remove('active');
  }
})
