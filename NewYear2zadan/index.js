/**
 * Created by thmos on 2016/12/22.
 */
window.onload=function () {
    var Open = $('.open'),
		Letter = $('.letter'),
		Head1 = $('.head1'),
		Head2 = $('.head2'),
		Head3 = $('.head3'),
		Head4 = $('.head4'),

		First = $('.first'),
		Second = $('.second'),
		Three = $('.three'),
		Four = $('.four'),
		Five = $('.five'),
		Six = $('.six'),
		Seven = $('.seven'),
		Eight = $('.eight'),
		End = $('#end'),
		Footer = $('.footer'),
		Arrow = $('.arrow'),
		Arrow1 = $('.arrow1'),

		F11 = $('.f11'),
		F12 = $('.f12'),
		F13 = $('.f13'),
		F14 = $('.f14'),
		F15 = $('.f15'),
		F16 = $('.f16'),
		F17 = $('.f17'),
		F18 = $('.f18'),
		F19 = $('.f19'),
		Contant = $('.contant'),
		Main = $('.main'),
		Wrapper = $('.wrapper');

	/*var Row = $('.row');
	Row.css({
		dispaly: 'none'
	});*/

	Open.click(function() {
		Letter.animate({top:'100%'},5000)
		setTimeout(function() {
			Letter.css({
				display: 'none'
			});
		}, 4500);
		Head1.css({
			opacity: '1'
		});
		setTimeout(function() {
			Head2.animate({
				opacity: '1'
			}, 1000);
		}, 2000)
		setTimeout(function() {
			Head3.animate({
				opacity: '1'
			}, 1000);
		}, 3000)
		setTimeout(function() {
			Head4.animate({
				opacity: '1'
			}, 1000);
			Main.animate({opacity:'1'},500)
		}, 4000)

		setTimeout(function() {
			First.css({
				display: 'block'
			});
			First.animate({
				opacity: '1'
			}, 1000);
			First.addClass('commont');
			F11.animate({
				opacity: '1'
			}, 1000)
		}, 4500);
		setTimeout(function() {
			Second.css({
				display: 'block'
			});
			Second.animate({
				opacity: '1'
			}, 1000);
			Second.addClass('commont');
			F12.animate({
				opacity: '1'
			}, 1000)
		}, 5000);

		setTimeout(function() {
			Three.css({
				display: 'block'
			});
			Three.animate({
				opacity: '1'
			}, 1000);
			Three.addClass('commont');
			F13.animate({
				opacity: '1'
			}, 1000)
		}, 5500);

	});

	var Aad = $('.add');
	Aad.css({
		display: 'none'
	});

	$(window).scroll(function() {
		var top = document.body.scrollTop || document.documentElement.scrollTop;
		var Hei = document.body.scrollHeight;
		addEventListener('scroll', function() {
			if(top > 55) {
				Four.css({
					display: 'block'
				});
				Four.addClass('commont');
				setTimeout(function() {
					F14.animate({
						opacity: '1'
					}, 1000)
				}, 1000)
			}
			if(top > 245) {
				Five.css({
					display: 'block'
				});
				Five.addClass('commont');
				setTimeout(function() {
					F15.animate({
						opacity: '1'
					}, 1000)
				}, 1000)
			}
			if(top > 455) {
				Six.css({
					display: 'block'
				});
				Six.addClass('commont');
				setTimeout(function() {
					F16.animate({
						opacity: '1'
					}, 1000)
				}, 1000)
			}
			if(top > 645) {
				Seven.css({
					display: 'block'
				});
				Seven.addClass('commont');
				setTimeout(function() {
					F17.animate({
						opacity: '1'
					}, 1000)
				}, 1000)
			}
			if(top > 840) {
				Eight.css({
					display: 'block'
				});
				Eight.addClass('commont');
				setTimeout(function() {
					F18.animate({
						opacity: '1'
					}, 1000)
				}, 1000)
			}
			if(top > 1060) {
				End.css({
					display: 'block'
				});
				End.addClass('commont');
				setTimeout(function() {
					F19.animate({
						opacity: '1'
					}, 1000)
				}, 1000)
			}
			if(top > 990) {
				Footer.css({
					display: 'block'
				});
				Footer.animate({
					opacity: '1'
				}, 6000)
				Footer.addClass('commont');
			}
			if(top > 1585) {
				Arrow.css({
					display: 'block'
				});
				Arrow1.css({
					display: 'block'
				});
				Arrow.animate({
					opacity: '1'
				}, 6000)
				Arrow.addClass('commont');
			}
		}, false)

		/*var scrollTop = $(this).scrollTop(),
			scrollHeight = $(document).height(),
			windowHeight = $(this).height(),
			Row1 = $('.row1'),
			Arrow = $('.arrow');
		if(scrollTop + windowHeight === scrollHeight) {
			Arrow.click(function() {
				Wrapper.css({
					display: 'none'
				});
				Row.css({
					display: 'block'
				});
				Row.animate({
					opacity: '1'
				}, 4000);
				Row1.addClass('boss');
			});
		}*/
	});


	var BossBot=$('.boss_bot');
	var Row=$('.row');
	var Row1=$('.row1');
	var EaggeFirst=$('.eagger_first');
    var Back = $('.back');

    Arrow1.click(function () {
        Row.css({display:'block'});
        setTimeout(function () {
			Row.css({top:'30%'});
			Back.css({top:'80%'});
        },2000)
        EaggeFirst.attr('src','images/lie.png');//把src属性更改为'6.jpg';
        BossBot.css({display:'block'});
        /*Row1.addClass('boss');*/
       /* Row.animate({bottom:'37%'},2000)*/
       Row.addClass('botmove')

    });


    Back.click(function() {
        EaggeFirst.attr('src','images/eagger.png');//把src属性更改为'6.jpg';
        Row.css({
            display: 'none',
			bottom:'0'
        });
        BossBot.css({display:'none'});
       /* Wrapper.css({
            display: 'block'
        });*/
    });
};