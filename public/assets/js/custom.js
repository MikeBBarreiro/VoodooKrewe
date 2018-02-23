$(document).ready(function() {
    // if(localStorage.getItem('garretPopState') !== 'shown'){
    //   console.log('localStorage activation');
    //   $(".overlayForModal").delay(1000).fadeIn();
    //   localStorage.setItem('garretPopState','shown')
    // }
    // if(localStorage.getItem('garretPopState') === 'shown'){
    //   localStorage.clear()
    // }
    localStorage.clear()

    $('div.a').each(function(i,el){
      el.id = 'player' + i + 1;
    });


    // $('.vkyoutubeBtn').click(function(){
    //   window.open('https://www.youtube.com/channel/UCrbCxjZu-YO_jN75i6E0vnQ?view_as=subscriber', '_blank');
    // });
});

// $(".bg").interactive_bg({
//    strength: 25,
//    scale: 1.05,
//    animationSpeed: "100ms",
//    contain: true,
//    wrapContent: false
//  });

if ( $(window).width() > 414) {
  //Add your javascript for large screens here
}
else {
  //Add your javascript for small screens here
  $('.gotoybChannel').html('<i style="font-size:38px;" class="icon alt fa-youtube"></i>');
}


window.onload = function(){
  var backImg = [
    'images/VKplayerlandings/TekkVKPartical.jpg',
    'images/VKplayerlandings/MIkeBLAWB00.jpg',
    'images/VKplayerlandings/michael03.jpg',
    'images/VKplayerlandings/Michael01-copy.jpg',
    'images/VKplayerlandings/michael03.jpg',
    'images/VKplayerlandings/Michael01-copy.jpg',
    'images/VKplayerlandings/reece00.jpg',
    'images/VKplayerlandings/matt00.jpg',
    'images/VKplayerlandings/John02.jpg',
    'images/VKplayerlandings/blake00.jpg',
    'images/VKplayerlandings/14682082_1365334303478046_2597979540311537658_o.jpg',
    'images/VKplayerlandings/brodey00.jpg',
    'images/VKplayerlandings/matt00.jpg',
    'images/VKplayerlandings/lj00.jpg',
    'images/VKplayerlandings/andrew00.jpg',
    'images/VKplayerlandings/jeremy00.jpeg',
    'images/VKplayerlandings/LACONNECTLAWB.jpg',
    'images/VKplayerlandings/moneyLAWB.jpg',
    'images/VKplayerlandings/charlyJLJLAWB.jpg',
    'images/VKplayerlandings/jeremyLAWB00.jpg'
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

//Dear future MikeB.. If your instafeed breaks or just stops working. the client ID or access token OR both have changed
//You can get the clientId here: https://www.instagram.com/developer/clients/manage/
//You can get an access token here: http://instagramwordpress.rafsegat.com/docs/get-access-token/
//You can get the user id with this URL in a browser, just replce My user names with the user name your seacrhing for: https://www.instagram.com/l8mikebl8/?__a=1
// EXAMPLE FOR USER ID: https://www.instagram.com/EXAMPLEUSERNAMEGOESHERE/?__a=1
//https://api.instagram.com/v1/users/search?q=[USERNAME]&access_token=[ACCESS TOKEN]

//Below is the access toke, client ID, and user id for MB's feed
//clientId: '4cef7d2746af4a9a8d87edf0cecc7c9c',
//accessToken: '182959196.ba4c844.b75dab56a272445e83b8025994e01c11',
//userID: 182959196

var feed = new Instafeed({
  get: 'user',
  userId:  2328738738,
  clientId: '990ee929f3434139bc03085071a93091',
  accessToken: '2328738738.ba4c844.056706f55e9143949e5286ed9d67c791',
  limit: 12,
  resolution: 'low_resolution',
  // template: '<a href="{{link}}" class="instagram-{{orientation}}" target="_blank"><img src="{{image}}" /></a>',
  template: '<div class="col3"><a href="{{link}}" target="_blank" style="background-image: url({{image}});" class="zoom instagram-{{orientation}}"></a></div>',
  useHttp: true
});
feed.run();


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
