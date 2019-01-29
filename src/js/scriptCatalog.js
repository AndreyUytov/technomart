'use strict';





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
var templateItem = document.querySelector('.template-item').content.querySelector('li');


var renderPageDefault = function (cardItemsSort) {
	var arrNames = cardItemsSort.map(function(item){
		return item.name;
	});
	var delPrice = cardItemsSort.map(function(item){
		return item.delPrice;
	});
	var newPrice = cardItemsSort.map(function(item){
		return item.newPrice;
	});
	var img = cardItemsSort.map(function(item){
		return item.src;
	});
	// для очистки преидущей сортировки
	var listRemover = function() {
		var itemsRemoves = catalogItems.querySelectorAll('li');
		for(var i = 0; i < itemsRemoves.length; i++){
			var deleteElement = itemsRemoves[i];
			deleteElement.remove();

		};
	};
	listRemover();
// Отрисока по страницам (на каждой странице максимум 9 элементов)
var pageOneClick = function (){

	for (var i = 0; i < 8; i++) {
		var card = templateItem.cloneNode(true);
		card.querySelector('h3').textContent = arrNames[i];
		card.querySelector('del').textContent = delPrice[i] + ' Р.';
		card.querySelector('.price-btn').textContent = newPrice[i] + ' Р.';
		card.querySelector('img').src = img[i];

		catalogItems.appendChild(card);
	};
};

var pageTwoClick = function(){
	for (var i = 9; i < 18; i++) {
		var card = templateItem.cloneNode(true);
		card.querySelector('h3').textContent = arrNames[i];
		card.querySelector('del').textContent = delPrice[i] + ' Р.';
		card.querySelector('.price-btn').textContent = newPrice[i] + ' Р.';
		card.querySelector('img').src = img[i];

		catalogItems.appendChild(card);
	};
};

var pageThreeClick = function(){
	for (var i = 19; i < 28; i++) {
		var card = templateItem.cloneNode(true);
		card.querySelector('h3').textContent = arrNames[i];
		card.querySelector('del').textContent = delPrice[i] + ' Р.';
		card.querySelector('.price-btn').textContent = newPrice[i] + ' Р.';
		card.querySelector('img').src = img[i];

		catalogItems.appendChild(card);
	};
};
// для поиска активной страницы
var paginationItems = document.querySelectorAll('.pagination-item');
	var activePageIndex = function(){
		for(var i = 0; i < paginationItems.length; i++){
			var page = paginationItems[i];
			if(page.classList.contains('pagination-item--active')) {
				return i;
			};
		};
	};
	// Для отрисовки содержимого активной страницы
	var renderActivePage = function (i){
		if(i = 0){
			pageOneClick();
		}else if(i = 1){
			pageTwoClick();
		}else if(i = 2){
			pageThreeClick();
		};
	};
	renderActivePage(activePageIndex);
// для работы счетчика
BigCounterFunc();
};



// Различные сортировки


var sortByPriceUp = function() {
	var cardItemsCopy = cardItems.slice();
	var newPriceUpArr = cardItemsCopy.sort(function(a,b){
		return a.newPrice - b.newPrice;
	});
	return newPriceUpArr;
};


var sortByPriceDown = function() {
	var cardItemsCopy = cardItems.slice();
	var newPriceDownArr = cardItemsCopy.sort(function(a,b){
		return b.newPrice - a.newPrice;
	});
	return newPriceDownArr;
};

var subListItemUp = document.querySelector('.sublist__item-up');
var subListItemDown = document.querySelector('.sublist__item-down');

subListItemUp.addEventListener('click', function(evt){
	evt.preventDefault();
	var arr = sortByPriceUp();
	

	renderPageDefault(arr);
});

subListItemDown.addEventListener('click', function(evt){
	evt.preventDefault();
	var arr = sortByPriceDown();
	renderPageDefault(arr);
});

renderPageDefault(cardItems);

