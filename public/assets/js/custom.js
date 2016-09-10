$(document).ready(function() {
    if(localStorage.getItem('gracePopState') !== 'shown'){
      console.log('localStorage activation');
      $(".overlayForModal").delay(1000).fadeIn();
      localStorage.setItem('gracePopState','shown')
    }
    // localStorage.clear()
});



window.onload = function(){
  var backImg = [
    'images/VKplayerlandings/Michael01-copy.jpg',
    'images/VKplayerlandings/John02.jpg',
    'images/VKplayerlandings/reece00.jpg',
    'images/VKplayerlandings/TekkVKPartical.jpg',
    'images/VKplayerlandings/matt00.jpg',
    'images/VKplayerlandings/jeremy00.jpeg',
    'images/VKplayerlandings/brodey00.jpg',
    'images/VKplayerlandings/blake00.jpg',
    'images/VKplayerlandings/lj00.jpg',
    'images/VKplayerlandings/andrew00.jpg'
  ];
  var today = new Date();
  var day = today.getDate();
  document.getElementById('banner').style.backgroundImage = 'url(' +backImg[day % backImg.length]+ ')'
  console.log('Date: ', day, today);

}
var closethemodal = function(){
  $('.overlayForModal').fadeOut(1000); // Now the pop up is hiden.
}

var toggleFullImage = function(){
  $('#content2').toggle(200);
}

window.playSound = function(){
	var audio = document.getElementById("audio");
	audio.volume = 0.1;
	audio.play();
}();

var pauseMusic = function(){audio.pause();}
$('#musicPlayer').click(function() {
  $('#musicPlayer').removeClass('bounceInLeft');
  $('#musicPlayer').addClass('bounceOutLeft');
});


$(window).scroll(function(){
  // console.log($(window).scrollTop());
  if($(window).scrollTop() > 265 && $(window).scrollTop() < 300){
     audio.volume = 0.05;
  }else if($(window).scrollTop() > 300 && $(window).scrollTop() < 465){
    audio.volume = 0.04;
  }else if($(window).scrollTop() > 465 && $(window).scrollTop() < 565){
    audio.volume = 0.03;
  }else if($(window).scrollTop() > 565 && $(window).scrollTop() < 665){
    audio.volume = 0.02;
  }else if($(window).scrollTop() > 665 && $(window).scrollTop() < 765){
    audio.volume = 0.01;
  }else if($(window).scrollTop() > 795){
    audio.volume = 0;
  }
})
//
// var feed = new Instafeed({
//   get: 'user',
//   userId:  182959196,
//   clientId: '37e318f3dd3440779d5da44b327ac024',
//   accessToken: '182959196.4cef7d2.7cc091e86bf14c1cb012fd939af44b8a',
//   limit: 12,
//   resolution: 'low_resolution',
//   // template: '<a href="{{link}}" class="instagram-{{orientation}}" target="_blank"><img src="{{image}}" /></a>',
//   template: '<div class="col3"><a href="{{link}}" target="_blank" style="background-image: url({{image}});" class="zoom instagram-{{orientation}}"></a></div>',
//   useHttp: true
// });
// feed.run();

// $(".viewImage").click( function(event){
// 	event.preventDefault();
//     if ( $(this).hasClass("isDown") ) {
// 		$(".content").stop().animate({marginTop:"100%"}, 200);
//     } else {
//         $(".content").stop().animate({marginTop:"0px"}, 200);
//     }
//     $(this).toggleClass("isDown");
// 	return false;
// });
