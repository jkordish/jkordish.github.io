
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });

		$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top -80
				}, 1000);
				$('a[href*=#]:not([href=#])').removeClass('active');
				$(this).addClass('active');
				return false;
			  }
			}
		  });
		});