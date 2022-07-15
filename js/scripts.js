var spotlightEnabled = false;

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
    wait(4000).then(() => {
        setVisible('.pic', true);
        setVisible('#loading', false);
        bgImgResize();

    }));


function bgImgResize() {
    $('body').css("height", window.innerHeight + 'px')
    xTrans = (window.innerWidth - $('#vidItself').width())/2 + "px" 
    console.log( $('#vidItself').width())
    console.log(xTrans)
    yTrans = (window.innerHeight - $('#vidItself').height())/2 + "px" 
    console.log(yTrans)
    $('#vidItself').css('transform', 'translate(' + xTrans + ', ' + yTrans + ')')
    bgImgProp = 1.94197031
    bgVidProp = 1.77777777
    windowProp = $(window).width() / $(window).height()
    if (windowProp > bgImgProp) {
        $('#under-img').css('width', '100vw')
        $('#under-img').css('height', 'auto')
    } else {
        $('#under-img').css('height', '100%')
        $('#under-img').css('width', 'auto')
    }
    // if (windowProp > bgVidProp) {
    //     $('#vidContainer').css('width', '100vw')
    //     $('#vidContainer').css('height', 'auto')
    // } else {
    //     $('#vidContainer').css('height', '100%')
    //     $('#vidContainer').css('width', 'auto')
    // }

    wImg = $('#under-img').width();
    hImg = $('#under-img').height();
    wWin = window.innerWidth;
    hWin = window.innerHeight;
    wVid = $('#vidContainer').width();
    hVid = $('#vidContainer').height();
    transXImg = (wWin - wImg) / 2;
    transYImg = (hWin - hImg) / 2;
    transXVid = (wWin - wVid) / 2;
    transYVid = (hWin - hVid) / 2;

    $('#under-img').css('transform', `translate(${transXImg}px, ${transYImg}px)`)
    $('#maskCircle').css('transform', `translate(${transXImg * -1}px, ${transYImg * -1}px)`)
    // $('#vidContainer').css('transform', `translate(${transXVid}px, ${transYVid}px)`)



    // if ($(window).width() > $(window).height()) {
    //     if ($('.background-video-inset').width() < window.innerWidth) {
    //         $('.background-video-inset').css("min-width", window.innerWidth + 'px')
    //     }

    // }
}

$(window).resize(function () {
    bgImgResize();
})

// Reveal drawing on hover (>820)
if ($(window).width() > 820) {
    $('.pic').mousemove(function (event) {

        var brJoin = document.getElementById("btnJoin").getBoundingClientRect();
        brDiscord = document.getElementById("discord").getBoundingClientRect();
        brInstagram = document.getElementById("instagram").getBoundingClientRect();
        minX = brJoin.left;
        maxX = brDiscord.left;
        minY = brJoin.top;
        maxY = brJoin.bottom;
        minX2 = brDiscord.left;
        maxX2 = brDiscord.right;
        minY2 = brDiscord.top;
        maxY2 = brInstagram.bottom;
        mask = $('#mask1 circle')[0];
        upX = event.clientX;
        upY = event.clientY;

        event.preventDefault();
        if ((upX < minX || upX > maxX || upY < minY || upY > maxY) && (upX < minX2 || upX > maxX2 || upY < minY2 || upY > maxY2) && spotlightEnabled) {
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


//Spotlight toggle
$('#dis-spotlight-btn').click(function (){
    spotlightEnabled = true;
    $('#dis-spotlight-btn').hide()
    $('#spotlight-btn').show()
})

$('#spotlight-btn').click(function (){
    spotlightEnabled = false;
    $('#spotlight-btn').hide()
    $('#dis-spotlight-btn').show()
})

