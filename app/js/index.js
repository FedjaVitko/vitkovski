$(document).ready(function () {
    $(document).on("scroll", onScroll);

    // $('.button').on('click', onFilter);

    var $work_btn = $('.pulse_1');

    $work_btn.waypoint((direction) => {
       if (direction == 'down') {
                Circles.create({
                    id:         'bar-1',
                    percentage: 90,
                    radius:     60,
                    width:      3,
                    number:   	90 / 10 * 10 ,
                    text:       '%',
            colors:     ['rgba(43, 62, 92, 1)', 'white'],
            duration: 800
        });
        Circles.create({
                    id:         'bar-2',
                    percentage: 70,
                    radius:     60,
                    width:      3,
                    number:   	70 / 10 * 10,
                    text:       '%',
            colors:     ['rgba(43, 62, 92, 1)', 'white'],
            duration: 800
        });
        Circles.create({
                    id:         'bar-3',
                    percentage: 80,
                    radius:     60,
                    width:      3,
                    number:   	80 / 10 * 10,
                    text:       '%',
            colors:     ['rgba(43, 62, 92, 1)', 'white'],
            duration: 800
        });
        Circles.create({
                    id:         'bar-4',
                    percentage: 90,
                    radius:     60,
                    width:      3,
                    number:   	90 / 10 * 10,
                    text:       '%',
            colors:     ['rgba(43, 62, 92, 1)', 'white'],
            duration: 800
        });
        Circles.create({
                    id:         'bar-5',
                    percentage: 60,
                    radius:     60,
                    width:      3,
                    number:   	60 / 10 * 10,
                    text:       '%',
            colors:     ['rgba(43, 62, 92, 1)', 'white'],
            duration: 800
        });
        Circles.create({
            id:         'bar-4-second',
            percentage: 90,
            radius:     60,
            width:      3,
            number:     90 / 10 * 10,
            text:       '%',
            colors:     ['rgba(43, 62, 92, 1)', 'white'],
            duration: 800
        });
        Circles.create({
            id:         'bar-5-second',
            percentage: 60,
            radius:     60,
            width:      3,
            number:   	60 / 10 * 10,
            text:       '%',
            colors:     ['rgba(43, 62, 92, 1)', 'white'],
            duration: 800
        }); 
       } else {

       }
    })

    $('#smove_carousel').slick({});

    $('#chor_popup').popup({
        transition: 'all 0.3s',
        scrolllock: true,
        onopen: function() {
            $('#smove_carousel').css('display', 'block'); 
            $('#smove_carousel').get(0).slick.setPosition()
        }
    });

    $('#smove_popup').popup({
        transition: 'all 0.3s',
        scrolllock: true,
        onopen: function() {
            $('#smove_carousel').css('display', 'block'); 
            $('#smove_carousel').get(0).slick.setPosition()
        }
    });

    $('#daily_popup').popup({
        transition: 'all 0.3s',
        scrolllock: true,
        onopen: function() {
            $('#smove_carousel').css('display', 'block'); 
            $('#smove_carousel').get(0).slick.setPosition()
        }
    });

    $('#luke_popup').popup({
        transition: 'all 0.3s',
        scrolllock: true,
        onopen: function() {
            $('#smove_carousel').css('display', 'block'); 
            $('#smove_carousel').get(0).slick.setPosition()
        }
    });

    $('#learnyoutube_popup').popup({
        transition: 'all 0.3s',
        scrolllock: true,
        onopen: function() {
            $('#smove_carousel').css('display', 'block'); 
            $('#smove_carousel').get(0).slick.setPosition()
        }
    });

    $('#gento_popup').popup({
        transition: 'all 0.3s',
        scrolllock: true,
        onopen: function() {
            $('#smove_carousel').css('display', 'block'); 
            $('#smove_carousel').get(0).slick.setPosition()
        }
    });

    // Add active class
    $('ul .button').click(function(){
        console.log('The button was clicked!');
        $(this).addClass('active').siblings().removeClass('active'); 
    })

    var filterList = {
	
		init: function () {
		
			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixItUp({
				selectors: {
  			  target: '.portfolio',
  			  filter: '.filter'	
  		  },
  		  load: {
    		  filter: '.node' // show app tab on first load
    		}     
			});								
		
		}

	};
	
	// Run the show!
    filterList.init();
    
    $('#contact-form').submit(function(e) {
        var name = document.getElementById('name'),
            email = document.getElementById('email'),
            message = document.getElementById('message');
        $.ajax({
            url: "https://formspree.io/fvitkovski@mail.de",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        })
        e.preventDefault();
        $('#msg-success').removeClass('msg-success');
        setTimeout(() => {
            $('#msg-success').addClass('msg-success');
        }, 2000)
        $(this).get(0).reset();
    })

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var target = this.hash;
        var tar = $(target);
        $('html, body').stop().animate({
            'scrollTop': tar.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

// function onFilter(event) {
//     var value = $(this).attr('data-filter');
//     if (value == 'all') {
//         $('.filter').fadeIn(600);
//     } else {
//         $('.filter').not('.' + value).fadeOut(600);
//         $('.filter').filter('.' + value).fadeIn(600);
//     }
// }

function onScroll(event) {
    var scrollPosition = $(document).scrollTop();

    if (scrollPosition > $('#about').offset().top) {
        if (!$('#nav').hasClass("fixed")) {
            $('#nav').addClass("fixed");
        }
    }

    if (scrollPosition < $('#about').offset().top) {
        if ($('#nav').hasClass("fixed")) {
            $('#nav').removeClass("fixed");
        }
    }

    $('.mainnav').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.offset().top <= scrollPosition && refElement.offset().top + refElement.height() > scrollPosition) {
            $('nav ul li a').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}