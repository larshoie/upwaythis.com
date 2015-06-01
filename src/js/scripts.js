//box
$(document).ready(function(){

	var count = 0;
	var winWidth = $(window).width();
	var winHeight = $(window).height();

	$(document).mousemove(function(e){

		var x = e.morphbuttonX;
		var y = e.morphbuttonY;

		var rotateY = (360/winWidth) * y;
		var rotateX = (360/winHeight) * x;
        if(count===0) {

		$('.cube').css({'transform':'rotateY(' + rotateX + 'deg) rotateX(' + rotateY + 'deg)'});
	}

    });


							//   $( ".cube" ).click(function() {
							//
							// $('#s6 .top, #s6 .left,#s6 .right,#s6 .bottom,#s6 .back,#s6 .front').addClass('flat');
							// count += 1;
							// //
							//       $('.cube').css({
							//         'transform':'rotateY(' + '0' + 'deg) rotateX(' + '0' + 'deg)',
							//         'transition':' all 3.3s ease'
							//
							//
							//
							//       });



//         $(window).dblclick(function(){
//           $(".cube").panzoom();
//   $('.cube').panzoom("zoom",{increment:5});
//   });


    //} );


//   $(window).dblclick(function(){
//     var heightX = $(window).height();

//     $('.cube, .cube .side').animate({
//     height:heightX,
//     width:heightX
//   },500).css('overflow', 'visible');

//      $('.cube .top.flat').animate({
//   top:-heightX +10
// }, 500);
//     $('.cube .left.flat').animate({
//   left:-heightX +10
// }, 500);
//     $('.cube .right.flat').animate({
//   left:heightX - 10
// }, 500);
//     $('.cube .bottom.flat').animate({
//   top:heightX -10
// }, 500);
//         $('.cube .back.flat').animate({
//   top:heightX -10
// }, 500);
// });

  console.log(count);
});







				//
				// //click to rotate
				// var anglesNow = 0;
				// $(window).click(function(e){
				// // caching the object for performance reasons
				// var $elem = $('.about');
				//
				// // we use a pseudo object for the animation
				// // (starts from `0` to `angle`), you can name it as you want
				// $({deg: anglesNow}).animate({deg: anglesNow+90}, {
				// 		duration: 400,
				// 		step: function(now) {
				// 				// in the step-callback (that is fired each step of the animation),
				// 				// you can use the `now` paramter which contains the current
				// 				// animation-position (`0` up to `angle`)
				// 				$elem.css({
				// 						transform: 'rotate(' + now + 'deg)'
				// 				});
				// 		}
				// });
				// anglesNow=anglesNow+90;
				// });
