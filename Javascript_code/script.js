// Gallery Foods Function

        
var width = window.innerWidth ;




         
		function foods() {

			

			//display : none;

			document.getElementById('animate_1').style.opacity = "0" ;
			document.getElementById('animate_1').style.transition = "all 2s" ;
			document.getElementById('animate_2').style.opacity = "0" ;
			document.getElementById('animate_2').style.transition = "all 2s" ;
			document.getElementById('animate_3').style.opacity = "0" ;
			document.getElementById('animate_3').style.transition = "all 2s" ;
			document.getElementById('animate_5').style.opacity = "0" ;
			document.getElementById('animate_5').style.transition = "all 2s" ;
			document.getElementById('animate_8').style.opacity = "0" ;
			document.getElementById('animate_8').style.transition = "all 2s" ;

			// Translate 

            /* 1440PX */ /* document.getElementById('animate_0').style.opacity = "1" ;
			document.getElementById('animate_4').style.transform = "translate3d(0px,-320px,0px)" ;
			document.getElementById('animate_4').style.opacity = "1" ;
			document.getElementById('animate_4').style.transition = "all 0.5s" ;
			document.getElementById('animate_6').style.transform = "translate3d(910px,-640px,1150px)" ;
			document.getElementById('animate_6').style.transition = "all 0.5s" ;
			document.getElementById('animate_6').style.opacity = "1" ;
		    document.getElementById('animate_7').style.transform = "translate3d(-458px,-319px,-1150px)" ;
			document.getElementById('animate_7').style.transition = "all 0.5s" ;
			document.getElementById('animate_7').style.opacity = "1" ; */
			


			
			
			
			if (width >= 1400){

			document.getElementById('animate_0').style.opacity = "1" ;
			document.getElementById('animate_4').style.transform = "translate3d(0px,-320px,0px)" ;
			document.getElementById('animate_4').style.opacity = "1" ;
			document.getElementById('animate_4').style.transition = "all 0.5s" ;
			document.getElementById('animate_6').style.transform = "translate3d(910px,-640px,1150px)" ;
			document.getElementById('animate_6').style.transition = "all 0.5s" ;
			document.getElementById('animate_6').style.opacity = "1" ;
		    document.getElementById('animate_7').style.transform = "translate3d(-458px,-319px,-1150px)" ;
			document.getElementById('animate_7').style.transition = "all 0.5s" ;
			document.getElementById('animate_7').style.opacity = "1" ;
			

		} 
		

		if(width > 1000 && width < 1400) {

			document.getElementById('animate_6').style.transform = "translate3d(680px, -640px, 1150px)" ;
			document.getElementById('animate_6').style.transition = "all 0.5s" ;
			document.getElementById('animate_6').style.opacity = "1" ;
			document.getElementById('animate_7').style.transform = "translate3d(-340px,-319px,-1150px)" ;
			document.getElementById('animate_7').style.transition = "all 0.5s" ;
			document.getElementById('animate_7').style.opacity = "1" ;
			document.getElementById('animate_4').style.transform = "translate3d(0px, -319px, -1150px)" ;
			document.getElementById('animate_4').style.transition = "all 0.5s" ;
			document.getElementById('animate_4').style.opacity = "1" ;
			document.getElementById('animate_0').style.transition = "all 0.5s" ;
			document.getElementById('animate_0').style.opacity = "1" ;
			

			}


		 if(width > 760 && width < 1000)
			{
			document.getElementById('animate_6').style.transform = "translate3d(509px, -640px, 1150px)" ;
			document.getElementById('animate_6').style.transition = "all 0.5s" ;
			document.getElementById('animate_6').style.opacity = "1" ;			
			document.getElementById('animate_7').style.transform = "translate3d(-255px,-319px,-1150px)" ;
			document.getElementById('animate_7').style.transition = "all 0.5s" ;
			document.getElementById('animate_7').style.opacity = "1" ;
			document.getElementById('animate_4').style.transform = "translate3d(0px,-320px,0px)" ;
			document.getElementById('animate_4').style.opacity = "1" ;
			document.getElementById('animate_4').style.transition = "all 0.5s" ;
			document.getElementById('animate_0').style.transition = "all 0.5s" ;
			document.getElementById('animate_0').style.opacity = "1" ;
				
			}


		/*if(width > 700 && width < 1000)
		{


		}
		*/

	}
		function deserts() {


			


			// Disappear

			document.getElementById('animate_1').style.opacity = "0" ;
			document.getElementById('animate_1').style.transition = "all 2s" ;
			document.getElementById('animate_0').style.opacity = "0" ;
			document.getElementById('animate_0').style.transition = "all 2s" ;
			document.getElementById('animate_4').style.opacity = "0" ;
			document.getElementById('animate_4').style.transition = "all 2s" ;
			document.getElementById('animate_6').style.opacity = "0" ;
			document.getElementById('animate_6').style.transition = "all 2s" ;
			document.getElementById('animate_8').style.opacity = "0" ;
			document.getElementById('animate_8').style.transition = "all 2s" ;
			



			 if (width >= 1400) {
			// Tranform


			document.getElementById('animate_3').style.transform = "translate3d(0px,0px,0px)" ;
			document.getElementById('animate_3').style.opacity = "1" ;
			document.getElementById('animate_3').style.transition = "all 0.5s" ;
			document.getElementById('animate_5').style.transform = "translate3d(0px,-320px,0px)" ;
			document.getElementById('animate_5').style.opacity = "1" ;
			document.getElementById('animate_5').style.transition = "all 0.5s" ;
			document.getElementById('animate_7').style.transform = "translate3d(0px,-640px,0px)" ;
			document.getElementById('animate_7').style.transition = "all 0.5s" ;
			document.getElementById('animate_7').style.opacity = "1" ; 
			document.getElementById('animate_2').style.transform = "translate3d(-910px,0px,0px)" ;
			document.getElementById('animate_2').style.opacity = "1" ;
			document.getElementById('animate_2').style.transition = "all 0.5s" ;
		


			} 

			if (width >= 1000 && width < 1400) {

			document.getElementById('animate_2').style.transform = "translate3d(-680px, 0px, 0px)" ;
			document.getElementById('animate_2').style.opacity = "1" ;
			document.getElementById('animate_2').style.transition = "all 0.5s" ;
			document.getElementById('animate_3').style.transform = "translate3d(340px,-320px,0px)" ;
			document.getElementById('animate_3').style.opacity = "1" ;
			document.getElementById('animate_3').style.transition = "all 0.5s" ;
			document.getElementById('animate_5').style.transform = "translate3d(0px,-320px,0px)" ;
			document.getElementById('animate_5').style.opacity = "1" ;
			document.getElementById('animate_5').style.transition = "all 0.5s" ;
			document.getElementById('animate_7').style.transform = "translate3d(-341px, -319px, -1150px)" ;
			document.getElementById('animate_7').style.transition = "all 0.5s" ; 
			document.getElementById('animate_7').style.opacity = "1" ;
			
		}
			
			
			/*
			
			document.getElementById('animate_1').style.transition = "all 0.5s" ; 
			document.getElementById('animate_1').style.opacity = "1" ; 
			
			*/
			

		    if (width >= 760 && width < 1000) {
				document.getElementById('animate_2').style.transform = "translate3d(-510px, 0px, 0px)" ;
				document.getElementById('animate_2').style.opacity = "1" ;
				document.getElementById('animate_2').style.transition = "all 0.5s" ;
				document.getElementById('animate_3').style.transform = "translate3d(252px,-320px,0px)" ;
				document.getElementById('animate_3').style.opacity = "1" ;
				document.getElementById('animate_3').style.transition = "all 0.5s" ;
				document.getElementById('animate_5').style.transform = "translate3d(0px,-320px,0px)" ;
				document.getElementById('animate_5').style.opacity = "1" ;
				document.getElementById('animate_5').style.transition = "all 0.5s" ;
				document.getElementById('animate_7').style.transform = "translate3d(-260px, -319px, -1150px)" ;
				document.getElementById('animate_7').style.transition = "all 0.5s" ; 
				document.getElementById('animate_7').style.opacity = "1" ;
			
		   }

		   

	}

		function all_images() {

            document.getElementById('animate_0').style.transform = "translate3d(0px,0px,0px)" ;
			document.getElementById('animate_0').style.opacity = "1" ;
			document.getElementById('animate_0').style.transition = "all 0.5s" ;
			document.getElementById('animate_1').style.transform = "translate3d(0px,0px,0px)" ;
			document.getElementById('animate_1').style.opacity = "1" ;
			document.getElementById('animate_1').style.transition = "all 0.5s" ;
			document.getElementById('animate_2').style.transform = "translate3d(0px,0px,0px)" ;
			document.getElementById('animate_2').style.opacity = "1" ;
			document.getElementById('animate_2').style.transition = "all 0.5s" ;
			document.getElementById('animate_3').style.transform = "translate3d(0px,0px,0px)" ;
			document.getElementById('animate_3').style.opacity = "1" ;
			document.getElementById('animate_3').style.transition = "all 0.5s" ;
			document.getElementById('animate_4').style.transform = "translate3d(0px,0px,0px)" ;
			document.getElementById('animate_4').style.opacity = "1" ;
			document.getElementById('animate_4').style.transition = "all 0.5s" ;
			document.getElementById('animate_5').style.transform = "translate3d(0px,0px,0px)" ;
			document.getElementById('animate_5').style.opacity = "1" ;
			document.getElementById('animate_5').style.transition = "all 0.5s" ;
			document.getElementById('animate_6').style.transform = "translate3d(0px,0px,0px)" ;
			document.getElementById('animate_6').style.opacity = "1" ;
			document.getElementById('animate_6').style.transition = "all 0.5s" ;
			document.getElementById('animate_7').style.transform = "translate3d(0px,0px,0px)" ;
			document.getElementById('animate_7').style.opacity = "1" ;
			document.getElementById('animate_7').style.transition = "all 0.5s" ;
			document.getElementById('animate_8').style.transform = "translate3d(0px,0px,0px)" ;
			document.getElementById('animate_8').style.opacity = "1" ;
			document.getElementById('animate_8').style.transition = "all 0.5s" ;




		}


		function drinks() { 

			document.getElementById('animate_0').style.opacity = "0" ;
			document.getElementById('animate_0').style.transition = "all 0.5s" ;
			document.getElementById('animate_3').style.opacity = "0" ;
			document.getElementById('animate_3').style.transition = "all 0.5s" ;
			document.getElementById('animate_6').style.opacity = "0" ;
			document.getElementById('animate_6').style.transition = "all 0.5s" ;
			document.getElementById('animate_7').style.opacity = "0" ;
			document.getElementById('animate_7').style.transition = "all 0.5s" ;
			document.getElementById('animate_8').style.opacity = "0" ;
			document.getElementById('animate_8').style.transition = "all 0.5s" ;
			/* 

			*/


		if (width > 1000 && width < 1400){

		
			document.getElementById('animate_1').style.transform = "translate3d(-336px,0px,0px)" ;
			document.getElementById('animate_1').style.opacity = "1" ;
			document.getElementById('animate_1').style.transition = "all 0.5s" ;
			document.getElementById('animate_2').style.transform = "translate3d(-332px,0px,0px)" ;
			document.getElementById('animate_2').style.opacity = "1" ;
			document.getElementById('animate_2').style.transition = "all 0.5s" ;
			document.getElementById('animate_4').style.transform = "translate3d(-336px,0px,0px)" ;
			document.getElementById('animate_4').style.opacity = "1" ;
			document.getElementById('animate_4').style.transition = "all 0.5s" ;
			document.getElementById('animate_5').style.transform = "translate3d(0px,-320px,0px)" ;
			document.getElementById('animate_5').style.opacity = "1" ;
			document.getElementById('animate_5').style.transition = "all 0.5s" ;
		
		}

		if (width >= 1400){


			document.getElementById('animate_1').style.transform = "translate3d(-460px,0px,0px)" ;
			document.getElementById('animate_1').style.opacity = "1" ;
			document.getElementById('animate_1').style.transition = "all 0.5s" ;
			document.getElementById('animate_2').style.transform = "translate3d(-460px,0px,0px)" ;
			document.getElementById('animate_2').style.opacity = "1" ;
			document.getElementById('animate_2').style.transition = "all 0.5s" ;
			document.getElementById('animate_4').style.transform = "translate3d(-460px,0px,0px)" ;
			document.getElementById('animate_4').style.opacity = "1" ;
			document.getElementById('animate_4').style.transition = "all 0.5s" ;
			document.getElementById('animate_5').style.transform = "translate3d(-10px,-320px,0px)" ;
			document.getElementById('animate_5').style.opacity = "1" ;
			document.getElementById('animate_5').style.transition = "all 0.5s" ; 
			
			
		}

		if (width > 700 && width < 1000) {

			document.getElementById('animate_1').style.transform = "translate3d(-270px,0px,0px)" ;
			document.getElementById('animate_1').style.opacity = "1" ;
			document.getElementById('animate_1').style.transition = "all 0.5s" ;
			document.getElementById('animate_2').style.transform = "translate3d(-268px,0px,0px)" ;
			document.getElementById('animate_2').style.opacity = "1" ;
			document.getElementById('animate_2').style.transition = "all 0.5s" ;
			document.getElementById('animate_4').style.transform = "translate3d(-270px,0px,0px)" ;
			document.getElementById('animate_4').style.opacity = "1" ;
			document.getElementById('animate_4').style.transition = "all 0.5s" ;
			document.getElementById('animate_5').style.transform = "translate3d(-10px,-320px,0px)" ;
			document.getElementById('animate_5').style.opacity = "1" ;
			document.getElementById('animate_5').style.transition = "all 0.5s" ; 


		}

		

	}

	
	//TESTIMONIALS SLIDE SHOW 

 function testimonials_slideshow(n) {

 	if (n == 1) {



 		document.getElementById('text_2').style.transform = "scale(0)" ;
 		document.getElementById('text_2').style.transition = "transform 2.1s ease-in-out" ;
 		document.getElementById('text_3').style.transform = "scale(0)" ;
 		document.getElementById('text_3').style.transition = "transform 2.1s ease-in-out" ;
 		document.getElementById('text_1').style.transform = "scale(1)" ;
 		document.getElementById('text_1').style.transition = "transform 2.1s ease-in-out" ;

 		document.getElementById('dot_1').style.background = "rgba(191, 167, 96,1)" ;
 		document.getElementById('dot_3').style.background = "none"
 		document.getElementById('dot_2').style.background = "none"

 		
 	}
 	else if (n == 2) {



 		document.getElementById('text_1').style.transform = "scale(0)" ;
 		document.getElementById('text_1').style.transition = "transform 2.1s ease-in-out" ;
 		document.getElementById('text_3').style.transform = "scale(0)" ;
 		document.getElementById('text_3').style.transition = "transform 2.1s ease-in-out" ;
 		document.getElementById('text_2').style.transform = "scale(1)" ;
 		document.getElementById('text_2').style.transition = "transform 2.1s ease-in-out" ;

 		document.getElementById('dot_2').style.background = "rgba(191, 167, 96,1)"
 		document.getElementById('dot_3').style.background = "none"
 		document.getElementById('dot_1').style.background = "none"


 	}
 	else if (n == 3) {



 		document.getElementById('text_2').style.transform = "scale(0)" ;
 		document.getElementById('text_2').style.transition = "transform 2.1s ease-in-out" ;
 		document.getElementById('text_1').style.transform = "scale(0)" ;
 		document.getElementById('text_1').style.transition = "transform 2.1s ease-in-out" ;
 		document.getElementById('text_3').style.transform = "scale(1)" ;
 		document.getElementById('text_3').style.transition = "transform 2.1s ease-in-out" ;


 		document.getElementById('dot_3').style.background = "rgba(191, 167, 96,1)"
 		document.getElementById('dot_2').style.background = "none"
 		document.getElementById('dot_1').style.background = "none"
 

 	}

 }

	// Slide Show Begin

  var myIndex = 1 ;
  carousel()

 function carousel(){ 
 var i = 0 ;
 var x = document.getElementsByClassName('img') ;
 var y = document.getElementsByClassName('caption') ;

 for (var i = 0; x.length > i; i++) {
 	x[i].style.opacity = "0" ;
 	y[i].style.transition = "transform 0.7s ease-in-out" ;
    y[i].style.transform = "translateY(30px)";
 	y[i].style.opacity = "0" ;
 }
  myIndex++;
  
  if (myIndex > x.length) {myIndex = 1}   
  x[myIndex-1].style.opacity = "0.4"; 
  x[myIndex-1].style.transition = "all 0.7s ease-in-out" ;
  y[myIndex-1].style.opacity = "1"; 
  y[myIndex-1].style.transform = "translateY(-30px)";
  y[myIndex-1].style.transition = "all 0.7s ease-in-out" 
  
  setTimeout(carousel, 3000)

}


// History Slide Show

history()
var history_index = 0
function history(){

 var i = 0 ;
 var x = document.getElementsByClassName('about_img_history') ;

 for (var i = 0; x.length > i; i++) {
 	x[i].style.opacity = "0" ;
 	x[i].style.transition = "opacity 0.7s ease-in-out" ;
 }
  history_index ++;
  
  if (history_index > x.length) {history_index = 1}   
  x[myIndex-1].style.opacity = "1"; 
  x[myIndex-1].style.transition = "all 0.7s ease-in-out" ; 
  
  setTimeout(history, 1000)

}

// HISTORY SLIDING SHOW 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

	var i;
	var slides = document.getElementsByClassName('about_img_history_2') ;

	if (n > slides.length) {slideIndex = 1}  ;  
    if (n < 1) {slideIndex = slides.length} ;

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none' ;
	}

	slides[slideIndex-1].style.display = 'block';



/*  var i;
  var slides = document.getElementsByClassName("about_img_history_2");
  // var dots = document.getElementsByClassName("dots");
  
  // KONSI SLIDE DIKANI HAI
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  // SABHI SLIDE  KO DISAPPEAR KARNA
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  // DOTS
  /* for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
   */
  //SLIDE KO DIKAYGA 
  
 // slides[slideIndex-1].style.display = "block";  

 //  dots[slideIndex-1].className += " active";

}

$(window).scroll(function() {    
    var scroll = $(window).scrollTop(); 
    console.log(scroll)   
    if (scroll > 360) {

    	$(".header").addClass("active");
    	$(".nav_change").addClass('active_2') ;
    	$("#container").addClass('opacity') ;

    }

    else {
    	$(".header").removeClass("active");
    	$(".nav_change").removeClass('active_2') ;
    	$("#container").addClass('opacity') ;
    }

    if (scroll > 1540) {
    

     $(".timetable_content").addClass('opacity') ;
    }

    else {
    	$(".timetable_content").removeClass('opacity') ;
    } 

    if (scroll > 2700) {
    

     $(".gallery_animate").addClass('opacity_slow') ;
    }

    else {
    	$(".gallery_animate").removeClass('opacity_slow') ;
    }

    
    if (scroll > 3900) {
    

     $(".reservation_animate").addClass('opacity') ;
    }

    else {
    	$(".reservation_animate").removeClass('opacity') ;
    }

    

    if (scroll > 5400) {
    

     $(".testimonials_content").addClass('opacity') ;
    }

    else {
    	$(".testimonials_content").removeClass('opacity') ;
    }

    if (scroll > 5750) {
    

     $(".contact_title").addClass('opacity_slow') ;
    }

    else {
    	$(".contact_title").removeClass('opacity_slow') ;
    }

    
// IF-ELSE FOR CHANGING NAV COLOR 

    if (scroll > 0 && scroll < 360) {
    	$("#nav_home").addClass('dynamic') ;
    }

    else {
    	$("#nav_home").removeClass('dynamic') ;
    }


    if (scroll > 360 && scroll < 2127) {
    	$("#nav_about").addClass('dynamic') ;
    }

    else {
    	$("#nav_about").removeClass('dynamic') ;
    }


    if (scroll > 2127 && scroll < 2860) {
    	$("#nav_menu").addClass('dynamic') ;
    }

    else {
    	$("#nav_menu").removeClass('dynamic') ;
    }


     if (scroll > 2860 && scroll < 4140) {
    	$("#nav_gallery").addClass('dynamic') ;
    }

    else {
    	$("#nav_gallery").removeClass('dynamic') ;
    }


     if (scroll > 4140 && scroll < 6700) {
    	$("#nav_reservation").addClass('dynamic') ;
    }

    else {
    	$("#nav_reservation").removeClass('dynamic') ;
    }

    if (scroll > 6700) {
    	$("#nav_map").addClass('dynamic') ;
    }

    else {
    	$("#nav_map").removeClass('dynamic') ;
    }
})

// TOGGLE NAVBAR 

function toggle() {

	var element = document.getElementById("nav_changer");

	element.classList.toggle('nav_display')
}
