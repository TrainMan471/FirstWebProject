$(document).on('ready', function() {
$(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2995
      });
    });
	
/* Toggle between adding and removing the "responsive" class to navbartop when the user clicks on the icon */
function myFunction() {
    document.getElementsByClassName("navbartop")[0].classList.toggle("responsive");
}