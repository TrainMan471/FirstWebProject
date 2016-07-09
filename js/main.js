$(document).on('ready', function() {
$(".regular").slick({
    dots: true,
    infinite: true,
     slidesToShow: 3,
     slidesToScroll: 3,
	 adaptiveHeight: true,
  });
  $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
		adaptiveHeight: true,
		centerPadding: '40px',
		responsive: [
		{
		 breakpoint: 768,
		 settings: {
		 arrows: false,
		 centerMode: true,
		 centerPadding: '40px',
		 slidesToShow: 3
		 }
		},
		{
		breakpoint: 480,
		settings: {
		arrows: false,
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 1
		}
	}
]

      });
      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true,
		adaptiveHeight: true
      });
    });
	
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}