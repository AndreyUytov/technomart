'use strict';

var radioBtns = document.querySelectorAll('.radio-btn');
var sliders = document.querySelectorAll('.services-slider');


var addCliker = function (button, slider) {
    if (button.checked) {
        slider.classList.add('show-slider');
    }else if(!button.checked) {
        slider.classList.remove('show-slider');
    }
};

var clickHandler = function(btn) {
btn.addEventListener('click', function(evt) {
    for (var i = 0; i < radioBtns.length; i++) {
        var button = radioBtns[i];
        var slider = sliders[i];
				addCliker(button, slider);
    };
});
};

for (var index = 0; index < radioBtns.length; index++) {
    var btn = radioBtns[index];
        clickHandler(btn);
};

// Для попапа блока "напишите нам"

var closeBtn = document.querySelector('.write-us__close-btn');
var writeBtn = document.querySelector('.about-company__contact-button');
var popup = document.querySelector('.write-us');

var focusName = document.querySelector('#write-us__name');
var focusMail = document.querySelector('#write-us__mail');
var focusTextArea = document.querySelector('#write-us__message');
var formWriteUs = document.querySelector('.write-us__form');

var isStorageSupport = true;
var storageName = '';
var storageMail = '';

try {
    storageName = localStorage.getItem("focusName");
    storageMail = localStorage.getItem("focusMail");
    } catch (err) {
    isStorageSupport = false;
};


writeBtn.addEventListener('click', function (evt){
    evt.preventDefault();
    popup.classList.add('show-popup');
    if (storageName) {
        focusName.value = storageName;
        focusMail.focus();
    }if(storageName && storageMail) {
        focusName.value = storageName;
        focusMail.value = storageMail;
        focusTextArea.focus();
    } else {
        focusName.focus();
    }
});

formWriteUs.addEventListener('submit', function(evt){
    
    console.log(focusName.value);
    if(!focusName.value || !focusMail.value || !focusTextArea.value){
        evt.preventDefault();
    popup.classList.remove('shake-form');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('shake-form');
} else {
    if (isStorageSupport) {
        localStorage.setItem("focusName", focusName.value);
        localStorage.setItem("focusMail", focusMail.value);
    }
}
});

closeBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    popup.classList.remove('show-popup');
		popup.classList.remove('shake-form');
		popup.style.top = 220 + 'px';
		popup.style.left = 50 + '%';
		popup.style.marginLeft = '-310px';
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
     if (popup.classList.contains("show-popup")) {
         evt.preventDefault();
         popup.classList.remove("show-popup");
				 popup.classList.remove('shake-form');
				 popup.style.top = 220 + 'px';
				 popup.style.left = 50 + '%';
				 popup.style.marginLeft = '-310px';
        }
    }
});

// Блок слайдеров



var nextSlider = document.querySelector('.right-btn');
var prevSlider = document.querySelector('.left-btn');

var sliderDots = document.querySelectorAll('.slider-dots__item');
var banners = document.querySelectorAll('.slider-list__item');

var searchCurrentSlider = function (banners) {
	for (var i = 0; i < banners.length; i++) {
		if (banners[i].classList.contains('slider-list__item--active')) { 
            banners[i].classList.remove('slider-list__item--active');
            sliderDots[i].classList.remove('slider-dots__item--active');
			return i;
		}
	}
};

var nextSliderOn = function (nextSlider) {
	nextSlider.addEventListener('click', function(evt) {
    var i = searchCurrentSlider(banners);
    var next = i + 1;
    if (next < banners.length) {
        banners[next].classList.add('slider-list__item--active');
        sliderDots[next].classList.add('slider-dots__item--active');
    } else {
        next = 0;
        banners[next].classList.add('slider-list__item--active');
        sliderDots[next].classList.add('slider-dots__item--active');
    };
	})
};
 
var prevSliderOn = function (prevSlider) {
    prevSlider.addEventListener('click', function(evt) {
    var i = searchCurrentSlider(banners);
    var prev = i - 1;
    if (prev >= 0) {
        banners[prev].classList.add('slider-list__item--active');
        sliderDots[prev].classList.add('slider-dots__item--active');
    } else {
        prev = banners.length - 1;
        banners[prev].classList.add('slider-list__item--active');
        sliderDots[prev].classList.add('slider-dots__item--active');
    };
	})
};

nextSliderOn(nextSlider);
prevSliderOn(prevSlider);

// Блок карты 
 var miniMap = document.querySelector('.about-company__link');
 var bigMap = document.querySelector('.big-map');
 var closeBigMap = document.querySelector('.close-map-btn');

 miniMap.addEventListener('click', function (evt){
     evt.preventDefault();
     bigMap.classList.add('show-map');
 });

 closeBigMap.addEventListener('click', function(evt){
     evt.preventDefault();
     bigMap.classList.remove('show-map');
 });

//  Счетчик для корзины и закладок
(function()
{var basket = document.querySelector('.chosen-list__item--basket span');
var basketPapa = document.querySelector('.chosen-list__item--basket');
var bookmark = document.querySelector('.chosen-list__item--bookmark span');
var bookmarkPapa = document.querySelector('.chosen-list__item--bookmark');
var popupBasket = document.querySelector('.popup-basket');
var popupBasketClose = document.querySelector('.close-popup-basket');
var popupBasketClose2 = document.querySelector('.buttons__button-keep-buy');

popupBasketClose.addEventListener('click', function (evt){
	evt.preventDefault();
	popupBasket.classList.remove('show-slider');
});

popupBasketClose2.addEventListener('click', function (evt){
	evt.preventDefault();
	popupBasket.classList.remove('show-slider');
});


  function makeCounter() {
		function counter() {
			return counter.currentCount++;
		};
		counter.currentCount = 1;
		return counter;
};


var counterBookmark = makeCounter ();
var counterBasket = makeCounter ();

var buttonBuys = document.querySelectorAll('.card-item__button-buy');
var buttonFavorites = document.querySelectorAll('.card-item__button-favorite');

var clickerToButtonbookmark = function (buttons) {
	buttons.addEventListener ('click', function (evt){
		evt.preventDefault();
		bookmark.textContent = ' ' + counterBookmark();
		bookmarkPapa.classList.add('chosen-list__item--active');
	})
};



for (var i = 0; i < buttonFavorites.length; i++) {
	var buttonBasket = buttonFavorites[i];
	clickerToButtonbookmark(buttonBasket);
};

var clickerToButtonbasket = function (buttons) {
	buttons.addEventListener ('click', function (evt){
		evt.preventDefault();
		basket.textContent = ' ' + counterBasket();
		basketPapa.classList.add('chosen-list__item--active');
		popupBasket.classList.add('show-slider');
	})
};

for (var i = 0; i < buttonBuys.length; i++) {
	var buttonBuy = buttonBuys[i];
	clickerToButtonbasket(buttonBuy);
};
})();

//  перемещение

var mouseDownOn = function (button) {
	button.addEventListener('mousedown', function (evtDown){
		evtDown.preventDefault();
		var startCoord = {
			x: evtDown.clientX,
			y: evtDown.clientY
		};
		var onMouseMove = function (moveEvt){
			var shift = {
				x: startCoord.x - moveEvt.clientX,
				y: startCoord.y - moveEvt.clientY
			};

			startCoord = {
				x: moveEvt.clientX,
				y: moveEvt.clientY
			};
			popup.style.top = (popup.offsetTop - shift.y) + 'px';
			popup.style.left = (popup.offsetLeft - shift.x) + 'px';
			popup.style.margin = 0;
			popup.style.height = '430px';
		};

		var onMouseUp = function (mouseUp){
			mouseUp.preventDefault();
			document.removeEventListener('mousemove', mouseDownOn);
			document.removeEventListener('mousemove', onMouseMove);
		}

		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	});
};

var moveWriteUs = document.querySelector('.moveTo');

mouseDownOn (moveWriteUs);