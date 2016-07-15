/* The code below is used to adjust settings for the slick() plugin */
$(document).on('ready', function() {
$(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3000
      });
    });
	
	
/*The code below is used to adjust settings for the center slider */
$(document).on('ready',function() {
$(".center").slick({
	 dots: true,
	 infinite: true,
	 variableWidth: false,
	 adaptiveHeight: true,
	 autoplay: true,
	 autoplaySpeed: 3000
	 });
  });
	
/* Toggle between adding and removing the "responsive" class to navbartop when the user clicks on the icon */
function respNavBar() {
    document.getElementsByClassName("navbartop")[0].classList.toggle("responsive");
}