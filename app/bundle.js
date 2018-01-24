/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	
	$(document).ready(function () {
	    $(document).on("scroll", onScroll);

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

	function onScroll(event){
	    var scrollPosition = $(document).scrollTop();

	    console.log($('#about').offset().top);

	    $.getScript("progress_circle.js", function() {
	        console.log('success loading in the script!');
	        if (scrollPosition > $('#about').offset().top) {
	            var circularBars = new CircularSkillBar( "#bars .bar" );
	        }
	     });
	    
	    if (scrollPosition > $('#about').offset().top) {
	        console.log('scrollPosition == 600');
	        $('#nav').addClass("fixed");
	        $('#tohome').removeClass("active");
	    }

	    if (scrollPosition < $('#about').offset().top) {
	        console.log('scrollPosition == 600');
	        $('#nav').removeClass("fixed");
	    }

	    $('nav a').each(function () {
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

/***/ })
/******/ ]);