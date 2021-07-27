// ================================================================
// SLOT 1.0
// ================================================================
/*
Copyright 2016 Delta System Solutions Co.Ltd. All rights reserved.
*/
/*---------------------
	Customize Settings
-----------------------*/
var slotImg = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var bgImg = ['jel', 'sutopuri', 'nanamori', '', 'rinu', '', 'satomi', 'colon', 'root'];
var slotNum = 50;
var startPos = -140 * (slotNum - 3);
var stopPos = -700;
var middleNum = 7;
var slotEasing = ['swing', 'easeOutQuart', 'easeOutBack', 'easeOutBounce'];
var slotDuration = 5;
var kakuritu = 0.3;

/*---------------------
	Definitions
-----------------------*/
var atariIdx;
var easingIdx;
var hantei;
var time;
var result1 = new Array();
var result2 = new Array();
var result3 = new Array();

/*---------------------
	Functions
-----------------------*/
$(document).ready(function() {
	atariHantei();
	slotCreate($("#slots_a .wrapper"), 1);
	slotCreate($("#slots_b .wrapper"), 2);
	slotCreate($("#slots_c .wrapper"), 3);
});

function atariHantei() {
	atariIdx = Math.floor(Math.random() * slotImg.length);
	if (atariIdx == 3 || atariIdx == 5) {
		atariHantei();
	}
	hantei = Math.random() < kakuritu;
};

function slotCreate(obj, slotno) {
	obj.stop(true, true);
	obj.children().remove();

	var save_result1 = result1[slotno];
	var save_result2 = result2[slotno];
	var save_result3 = result3[slotno];

	for (var i = 1; i <= slotNum; i++) {
		var idx = Math.floor(Math.random() * slotImg.length);

		if (i == middleNum - 1) {
			result1[slotno] = idx;
		} else if (i == middleNum) {
			if (hantei) {
				idx = atariIdx;
			}
			if (!hantei && slotno == 3) {
				if( result2[1] == idx && result2[2] == idx ){
					if(idx != slotImg.length -1 ){
						idx = idx+1;
					}else{
						idx = 0;
					}
				}
			}
			result2[slotno] = idx;
		} else if (i == middleNum + 1) {
			result3[slotno] = idx;
		} else if (i == slotNum - 2) {
			if (save_result1 != undefined) {
				idx = save_result1;
			}
		} else if (i == slotNum - 1) {
			if (save_result2 != undefined) {
				idx = save_result2;
			}
		} else if (i == slotNum) {
			if (save_result3 != undefined) {
				idx = save_result3;
			}
		}

		obj.append("<div class='slot'>" +
			"<img border='0'" +
			" src='./common/img/" + slotImg[idx] + ".jpg'" +
			" width='140' height='140' />" +
			"</div>");
	}

  obj.css({
		"margin-top": startPos + "px"
	});
}

function slotStart() {

	$("#startBtn").css('pointer-events', 'none');

	if ($("#slots_a .wrapper").css("margin-top") != startPos + "px") {
		atariHantei();
	}

	time = slotDuration * 1000;
	easingIdx = Math.floor(Math.random() * slotEasing.length);

	slotMove($("#slots_a .wrapper"), 1);
	setTimeout(function() {
		slotMove($("#slots_b .wrapper"), 2);
	}, 200);
	setTimeout(function() {
		slotMove($("#slots_c .wrapper"), 3);
	}, 400);

	$(this).delay(time + 500).queue(function() {

		if (result2[1] == result2[2] && result2[1] == result2[3]) {
			if(result2[1] != 3 && result2[1] != 5){
				showresult(result2[1]);
			}
		} else {
		}

		$("#startBtn").css('pointer-events', 'auto');
		$(this).dequeue();
	});
}

function slotMove(obj, slotno) {

	if (obj.css("margin-top") != startPos + "px") {
		slotCreate(obj, slotno);
	}

	obj.animate({
		"margin-top": stopPos + "px"
	}, {
		'duration': time,
		'easing': slotEasing[easingIdx]
	});
};


function showresult(number){
	// alert(slotName[number] + 'BINGO !!!');

	var overlay = $('.l-nav-mega-overlay');
	// overlay.on('click',function(){
	// 	modalTarget.attr('aria-expanded', 'false').fadeOut();
	// 	if(overlay) overlay.off().fadeOut();
	// 	return false;
	// });

	var slotAnker = $('#slot-anker');
	slotAnker.attr('href', './common/bg/'+bgImg[number]+'.jpg')
	slotAnker.on('click',function(){
		// modalTarget.attr('aria-expanded', 'false').fadeOut();
		// if(overlay) overlay.off().fadeOut();
	});

	var modalTarget = $('#slot-result');
	modalTarget.fadeIn(600, function(){
		$(this).attr('aria-expanded', 'true');
	});
	if(overlay) overlay.fadeIn(200);

	modalTarget.find('.p-modal-org__btn').on('click',function(){
		modalTarget.attr('aria-expanded', 'false').fadeOut();
		if(overlay) overlay.off().fadeOut();
		return false;
	});

}
