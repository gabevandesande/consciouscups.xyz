window.onload = function() {
    if( $(window).height() > $(window).width() )
        $('#under-img').css("height", "100%")
    else 
        $('#under-img').css("width", "100%")
  };
  
// Reveal drawing on hover

$('.pic').mousemove(function (event) {
    event.preventDefault();
    var upX = event.clientX;
    var upY = event.clientY;
    var mask = $('#mask1 circle')[0];
    mask.setAttribute("cy", (upY - 5) + 'px');
    mask.setAttribute("cx", (upX) + 'px');
});

$('.btn-join').click(function() {
   $('.social-container').show()
  });