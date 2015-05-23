$(document).ready(function(){


	var count = 0;
	var winWidth = $(window).width();
	var winHeight = $(window).height();

	$(document).mousemove(function(e){

		var x = e.pageX;
		var y = e.pageY;

		var rotateY = (360/winWidth) * y;
		var rotateX = (360/winHeight) * x;
        if(count===0) {

		$('.cube').css({'transform':'rotateY(' + rotateX + 'deg) rotateX(' + rotateY + 'deg)'});
	}

    });


  $( ".cube" ).click(function() {

$('#s6 .top, #s6 .left,#s6 .right,#s6 .bottom,#s6 .back,#s6 .front').addClass('flat');
count += 1;
//
      $('.cube').css({
        'transform':'rotateY(' + '0' + 'deg) rotateX(' + '0' + 'deg)',
        'transition':' all 3.3s ease'



      });

//         $(window).dblclick(function(){
//           $(".cube").panzoom();
//   $('.cube').panzoom("zoom",{increment:5});
//   });


    } );


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
