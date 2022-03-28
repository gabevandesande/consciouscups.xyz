window.onload = function() {
    if( $(window).height() > $(window).width() )
        $('#under-img').css("height", "100%")
    else 
        $('#under-img').css("width", "100%")
  };
  
// Reveal drawing on hover

// $('.pic').mousemove(function (event) {
//     event.preventDefault();
//     var upX = event.clientX;
//     var upY = event.clientY;
//     var mask = $('#mask1 circle')[0];
//     mask.setAttribute("cy", (upY - 5) + 'px');
//     mask.setAttribute("cx", (upX) + 'px');
// });

$('.btn-join').hover(function() {
   $('.social-container').show()
  });

$('.social-container').mouseleave(function() {
    $('.social-container').hide()
});

var firstMute = true;
var player = document.getElementById("player")
$('#unmute-btn').click(function() {
    if(firstMute){
        player.play();
        firstMute = false;
    }else{
        player.muted = false;
    }
    $('#unmute-btn').hide();
    $('#mute-btn').show();
})

$('#mute-btn').click(function() {
        player.muted = true;
    $('#mute-btn').hide();
    $('#unmute-btn').show();
})



$('#un-mute').click(function() {
    console.log($('#un-mute').val())
    player.play();
})

