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
var scale = rangeFilter.querySelector('.scale');
var minPrice = rangeFilter.querySelector('.min-price input');
var maxPrice = rangeFilter.querySelector('.max-price input');

var mouseDownOnMintoggle = function (button) {
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
				if ((toggleMin.offsetLeft - shift.x) >=20){
					toggleMin.style.left = (toggleMin.offsetLeft - shift.x) + 'px';
				} else {
					toggleMin.style.left = 20 + 'px';
				};
				if ((toggleMin.offsetLeft - shift.x) >= toggleMax.offsetLeft){
					toggleMin.style.left = (toggleMax.offsetLeft - 1) + 'px';
				};			
				scale.style.paddingLeft = (toggleMin.offsetLeft - 20) + 'px';
				 minPrice.value = (toggleMin.offsetLeft - 20)*167;

		};

		var onMouseUp = function (mouseUp){
			mouseUp.preventDefault();
			document.removeEventListener('mousemove', mouseDownOnMintoggle);
			document.removeEventListener('mousemove', onMouseMove);
		}

		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	});
};

var mouseDownOnMaxtoggle = function (button) {
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
				if ((toggleMax.offsetLeft - shift.x) >= 180){
					toggleMax.style.left = 180 + 'px';
				} else {
					toggleMax.style.left = (toggleMax.offsetLeft - shift.x) + 'px';
				};
				if ((toggleMax.offsetLeft - shift.x) <= toggleMin.offsetLeft){
					toggleMax.style.left = (toggleMin.offsetLeft + 1) + 'px';
				};
				scale.style.paddingRight = (182 - toggleMax.offsetLeft) + 'px';
				maxPrice.value = Math.ceil(toggleMax.offsetLeft*166.6666666666);
		};

		var onMouseUp = function (mouseUp){
			mouseUp.preventDefault();
			document.removeEventListener('mousemove', mouseDownOnMaxtoggle);
			document.removeEventListener('mousemove', onMouseMove);
		}

		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	});
};


mouseDownOnMintoggle (toggleMin);
mouseDownOnMaxtoggle (toggleMax);

maxPrice.addEventListener('change', function (evt){
	evt.preventDefault();
	if (maxPrice.value <= 30000){
		toggleMax.style.left = (maxPrice.value/166.666) + 'px';
		scale.style.paddingRight = (182 - toggleMax.offsetLeft) + 'px';

	}	if (maxPrice.value <= minPrice.value) {
		maxPrice.value = minPrice.value;
		toggleMax.style.left = (maxPrice.value/166.666) + 'px';
		scale.style.paddingRight = (182 - toggleMax.offsetLeft) + 'px';
	} 
});

minPrice.addEventListener ('change', function(evt){
	evt.preventDefault();
	if (minPrice.value >= 0){
		toggleMin.style.left = (minPrice.value/167) + 20 + 'px';
		scale.style.paddingLeft = (toggleMin.offsetLeft - 20) + 'px';
	}
	
	if (minPrice.value > maxPrice.value){
		minPrice.value = maxPrice.value;
		toggleMin.style.left = (minPrice.value/167) + 20 + 'px';
		scale.style.paddingLeft = (toggleMin.offsetLeft - 20) + 'px';
	}
});

// проба с шаблонизацией


var cardItems = [
	{
		name:'Перфоратор BOSCH BFG 3000',
		delPrice: 22500,
		newPrice: 15500,
		src: 'img/snippet2.jpg'
	},
	{
		name:'Перфоратор BOSCH BFG 6000',
		delPrice:30500,
		newPrice:25500,
		src:'img/snippet3.jpg'
	},
	{
		name:'Перфоратор BOSCH BFG 2000',
		delPrice: null,
		newPrice:12500,
		src:'img/snippet4.jpg'
	},
	{
		name:'Перфоратор BOSCH BFG 3000',
		delPrice:22500,
		newPrice:15500,
		src:'img/snippet2.jpg'
	},
	{
		name:'Перфоратор BOSCH BFG 6000',
		delPrice:30500,
		newPrice:25500,
		src:'img/snippet3.jpg'
	},
	{
		name:'Перфоратор BOSCH BFG 2000',
		delPrice: null,
		newPrice: 12500,
		src:'img/snippet4.jpg'
	},
	{
		name:'Перфоратор BOSCH BFG 3000',
		delPrice:22500,
		newPrice:15500,
		src:'img/snippet2.jpg'
	},
	{
		name:'Перфоратор BOSCH BFG 6000',
		delPrice:30500,
		newPrice:25500,
		src:'img/snippet3.jpg'
	},
	{
		name:'Перфоратор BOSCH BFG 2000',
		delPrice: null,
		newPrice:12500,
		src:'img/snippet4.jpg'
	},
	{
		name:'Перфоратор BOSCH BFG 6301',
		delPrice:26500,
		newPrice:25500,
		src:'img/snippet3.jpg'
	},
	{
		name:'Перфоратор BOSCH BFG 6001',
		delPrice:32500,
		newPrice:24500,
		src:'img/snippet4.jpg'
	},
	{
		name:'Перфоратор BOSCH BFG 6050',
		delPrice:33500,
		newPrice:21500,
		src:'img/snippet2.jpg'
	},
	{
		name:'Перфоратор BOSCH BFG 2560',
		delPrice:28500,
		newPrice:24500,
		src:'img/snippet4.jpg'
	},
	{
		name:'Перфоратор BOSCH BFG 1000',
		delPrice:25500,
		newPrice:19500,
		src:'img/snippet3.jpg'
	},
	{
		name:'Перфоратор BOSCH BFG 7000',
		delPrice:38500,
		newPrice:25500,
		src:'img/snippet4.jpg'
	},
	{
		name:'Перфоратор BOSCH BFG 620',
		delPrice:8500,
		newPrice:25500,
		src:'img/snippet3.jpg'
	},
];

var catalogItems = document.querySelector('.list-flex-wrap--catalog');
var templateItem = document.querySelector('.template-item').content.cloneNode(true);
var nameTemp = templateItem.querySelector('h3');
var delPriceTemp = templateItem.querySelector('del');
var currentPriceTemp = templateItem.querySelector('.price-btn');
var imgTemp = templateItem.querySelector('img');

var renderPage = function () {
	
	var arrNames = cardItems.map(function(item){
		return item.name;
	});
	for (var i = 0; i < 9; i++) {
		nameTemp.textContent = arrNames[i];
		catalogItems.appendChild(templateItem);
		
	}
};

renderPage();