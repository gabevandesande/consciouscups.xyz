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
    wait(3000).then(() => {
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

        var brJoin = document.getElementById("btnJoin").getBoundingClientRect();
        brSocials = document.getElementById("socialContainer").getBoundingClientRect();
        minX = brJoin.left;
        maxX = brJoin.right;
        minY = brJoin.top;
        maxY = brJoin.bottom;
        minX2 = brSocials.left;
        maxX2 = brSocials.right;
        minY2 = brSocials.top;
        maxY2 = brSocials.bottom;
        mask = $('#mask1 circle')[0];
        upX = event.clientX;
        upY = event.clientY;

        event.preventDefault();
        if ((upX < minX || upX > maxX || upY < minY || upY > maxY) && (upX < minX2 || upX > maxX2 || upY < minY2 || upY > maxY2)) {
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

$('#unmute-btn-mobile').click(function () {
    if (firstMute) {
        player.play();
        firstMute = false;
    } else {
        player.muted = false;
    }
    $('#unmute-btn-mobile').hide();
    $('#mute-btn-mobile').show();
})

$('#mute-btn-mobile').click(function () {
    player.muted = true;
    $('#mute-btn-mobile').hide();
    $('#unmute-btn-mobile').show();
})



