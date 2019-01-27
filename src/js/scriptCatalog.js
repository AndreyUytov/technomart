'use strict';


///  Счетчик для корзины и закладок
var basket = document.querySelector('.chosen-list__item--basket span');
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


// Блок для фильтра с ползунком 
var rangeFilter = document.querySelector('.range-filter');

var toggleMin = rangeFilter.querySelector('.toggle-min');
var toggleMax = rangeFilter.querySelector('.toggle-max');

var mouseDownOn = function (button) {
	button.addEventListener('mousedown', function (evtDown){
		evtDown.preventDefault();
		var startCoord = {
			x: evtDown.clientX
		};
		var onMouseMove = function (moveEvt){
			var shift = {
				x: startCoord.x - moveEvt.clientX
			};

			startCoord = {
				x: moveEvt.clientX
			};
			toggleMin.style.left = (toggleMin.offsetLeft - shift.x) + 'px';
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

mouseDownOn (toggleMin);
