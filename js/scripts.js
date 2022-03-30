// Load screen
const wait = (delay = 0) =>
    new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) =>
    (typeof elementOrSelector === 'string'
        ? document.querySelector(elementOrSelector)
        : elementOrSelector
    ).style.display = visible ? 'block' : 'none';

setVisible('.pic', false);
setVisible('#loading', true);

document.addEventListener('DOMContentLoaded', () =>
    wait(20000).then(() => {
        setVisible('.pic', true);
        setVisible('#loading', false);
    }));

window.onload = function () {
    if ($(window).height() > $(window).width())
        $('#under-img').css("height", "100%")
    else
        $('#under-img').css("width", "100%")
};

// Reveal drawing on hover (>820)
if ($(window).width() > 820) {
    $('.pic').mousemove(function (event) {
        var offset = window.innerWidth * 0.06 + 150
        var minX = window.innerWidth / 2 - offset;
        var maxX = window.innerWidth / 2 + offset;
        var minY = window.innerHeight / 2 - offset - 75;
        var maxY = window.innerHeight / 2 + offset - 75;
        event.preventDefault();
        var mask = $('#mask1 circle')[0];

        var upX = event.clientX;
        var upY = event.clientY;


        if (upX < minX || upX > maxX || upY < minY || upY > maxY) {
            $('#maskCircle').fadeIn('fast');
            mask.setAttribute("cy", (upY - 5) + 'px');
            mask.setAttribute("cx", (upX) + 'px');
        } else {
            $('#maskCircle').fadeOut('fast');
        }

    });
}

// Join hover effects
if ($(window).width() > 820) {
    $('.btn-join').hover(function () {
        $('.social-container').show()
    });

    $('.social-container').mouseleave(function () {
        $('.social-container').hide()
    });
} else {
    $('.btn-join').click(function () {
        $('.social-container-mobile').show()
    });
}

// Mute / unmute
var firstMute = true;
var player = document.getElementById("player")
$('#unmute-btn').click(function () {
    if (firstMute) {
        player.play();
        firstMute = false;
    } else {
        player.muted = false;
    }
    $('#unmute-btn').hide();
    $('#mute-btn').show();
})

$('#mute-btn').click(function () {
    player.muted = true;
    $('#mute-btn').hide();
    $('#unmute-btn').show();
})

$('#un-mute').click(function () {
    console.log($('#un-mute').val())
    player.play();
})

