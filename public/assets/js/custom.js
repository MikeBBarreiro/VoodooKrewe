window.onload = function(){
  var backImg = [
    'images/VKplayerlandings/Michael01-copy.jpg',
    'images/VKplayerlandings/John02.jpg',
    'images/VKplayerlandings/reece00.jpg',
    'images/VKplayerlandings/TekkVKPartical.jpg',
    'images/VKplayerlandings/matt00.jpg',
    'images/VKplayerlandings/jeremy00.jpeg'
  ];
  var today = new Date();
  var day = today.getDate();
  document.getElementById('banner').style.backgroundImage = 'url(' +backImg[day % backImg.length]+ ')'
  console.log('Date: ', day, today);

}

var toggleFullImage = function(){
  $('#content2').toggle(200);
}

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
