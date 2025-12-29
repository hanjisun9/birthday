$(window).on('load', function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function () {

    var vw;

    /* ================= RESIZE ================= */
    $(window).resize(function () {
        vw = $(window).width() / 2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b11').animate({ top: 240, left: vw - 350 }, 500);
        $('#b22').animate({ top: 240, left: vw - 250 }, 500);
        $('#b33').animate({ top: 240, left: vw - 150 }, 500);
        $('#b44').animate({ top: 240, left: vw - 50 }, 500);
        $('#b55').animate({ top: 240, left: vw + 50 }, 500);
        $('#b66').animate({ top: 240, left: vw + 150 }, 500);
        $('#b77').animate({ top: 240, left: vw + 250 }, 500);
    });

    /* ================= TURN ON ================= */
    $('#turn_on').click(function () {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');

        $(this).fadeOut('slow').delay(3000).promise().done(function () {
            $('#play').fadeIn('slow');
        });
    });

    /* ================= PLAY MUSIC ================= */
    $('#play').click(function () {
        var audio = $('.song')[0];
        audio.play();

        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');

        $('body').addClass('peach-after');

        $(this).fadeOut('slow').delay(4000).promise().done(function () {
            $('#bannar_coming').fadeIn('slow');
        });
    });

    /* ================= BANNER ================= */
    $('#bannar_coming').click(function () {
        showSideVideos();
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(4000).promise().done(function () {
            $('#balloons_flying').fadeIn('slow');
        });
    });

    /* ================= BALLOONS (ASLI) ================= */
    function loopOne() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b1').animate({ left: randleft, bottom: randtop }, 10000, loopOne);
    }
    function loopTwo() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b2').animate({ left: randleft, bottom: randtop }, 10000, loopTwo);
    }
    function loopThree() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b3').animate({ left: randleft, bottom: randtop }, 10000, loopThree);
    }
    function loopFour() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b4').animate({ left: randleft, bottom: randtop }, 10000, loopFour);
    }
    function loopFive() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b5').animate({ left: randleft, bottom: randtop }, 10000, loopFive);
    }
    function loopSix() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b6').animate({ left: randleft, bottom: randtop }, 10000, loopSix);
    }
    function loopSeven() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b7').animate({ left: randleft, bottom: randtop }, 10000, loopSeven);
    }

    $('#balloons_flying').click(function () {
        $('.balloon-border').animate({ top: -500 }, 8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');

        loopOne(); loopTwo(); loopThree();
        loopFour(); loopFive(); loopSix(); loopSeven();

        $(this).fadeOut('slow').delay(5000).promise().done(function () {
            $('#cake_fadein').fadeIn('slow');
        });
    });

    /* ================= CAKE ================= */
    $('#cake_fadein').click(function () {
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(2500).promise().done(function () {
            $('#light_candle').fadeIn('slow');
        });
    });

    /* ================= CANDLE ================= */
    $('#light_candle').click(function () {
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').delay(2000).promise().done(function () {
            $('#wish_message').fadeIn('slow');
        });
    });

    /* ================= BALLOON FORM ================= */
    $('#wish_message').click(function () {
        vw = $(window).width() / 2;

        $('#b1').attr('id', 'b11');
        $('#b2').attr('id', 'b22');
        $('#b3').attr('id', 'b33');
        $('#b4').attr('id', 'b44');
        $('#b5').attr('id', 'b55');
        $('#b6').attr('id', 'b66');
        $('#b7').attr('id', 'b77');

        $('#b11').animate({ top: 240, left: vw - 350 }, 600);
        $('#b22').animate({ top: 240, left: vw - 250 }, 600);
        $('#b33').animate({ top: 240, left: vw - 150 }, 600);
        $('#b44').animate({ top: 240, left: vw - 50 }, 600);
        $('#b55').animate({ top: 240, left: vw + 50 }, 600);
        $('#b66').animate({ top: 240, left: vw + 150 }, 600);
        $('#b77').animate({ top: 240, left: vw + 250 }, 600);

        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(2000);

        $(this).fadeOut('slow').delay(3000).promise().done(function () {
            $('#story').fadeIn('slow');
        });
    });

    /* ================= CONFETTI FUNCTION ================= */
    function launchConfetti() {
        for (let i = 0; i < 120; i++) {
            let confetti = $('<div class="confetti"></div>');
            $('body').append(confetti);

            confetti.css({
                left: Math.random() * window.innerWidth,
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                opacity: Math.random(),
                transform: `rotate(${Math.random() * 360}deg)`
            });

            confetti.animate({
                top: window.innerHeight + 100,
                left: '+=' + (Math.random() * 200 - 100)
            }, 3000 + Math.random() * 2000, function () {
                $(this).remove();
            });
        }
    }

    /* ================= STORY ================= */
    $('#story').click(function () {
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast');

        var messages = $('.message p');
        var i = 0;

        messages.hide();
        $('.message').fadeIn('slow');

        function showNext() {
            if (i > 0) messages.eq(i - 1).fadeOut('slow');

            if (i < messages.length) {
                messages.eq(i).fadeIn('slow').delay(1500).promise().done(function () {
                    i++;
                    showNext();
                });
            } else {
                $('.cake').fadeIn('slow');
                launchConfetti(); // 🎉 CONFETTI PAS ENDING
            }
        }

        showNext();
    });

    /* ================= VIDEO SIDE EFFECT ================= */
    function showSideVideos() {
        const left = document.getElementById('videoLeft');
        const right = document.getElementById('videoRight');

        left.play();
        right.play();

        left.classList.add('show');
        right.classList.add('show');
    }

    $('.smooth-loop').each(function () {
        const video = this;

        video.addEventListener('ended', function () {
            // fade out
            $(video).addClass('fade-out').removeClass('fade-in');

            setTimeout(() => {
                video.currentTime = 0;
                video.play();

                // fade in
                $(video).removeClass('fade-out').addClass('fade-in');
            }, 1200); // harus sama / sedikit < durasi transition
        });
    });


});
