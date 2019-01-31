'use strict';

var catalogItems = document.querySelector('.list-flex-wrap--catalog');
var templateItem = document.querySelector('.template-item').content.querySelector('li');


var renderPageDefault = function (arr) {
    var cardItemsSort = arr.slice();
    
    
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
	
    
    var testUndefindetValueCard = function(arr) {
        if (arr.length >= 9) {
            for (var i = 0; i < 9; i++) {
                var card = templateItem.cloneNode(true);
								card.querySelector('h3').textContent = arrNames[i];
                card.querySelector('del').textContent = delPrice[i] + ' Р.';
                card.querySelector('.price-btn').textContent = newPrice[i] + ' Р.';
                card.querySelector('img').src = img[i];
        
								catalogItems.appendChild(card);
								
            };
        } if (arr.length < 9) {
            for (var i = 0; i < arr.length; i++) {
                var card = templateItem.cloneNode(true);
                card.querySelector('h3').textContent = arrNames[i];
                card.querySelector('del').textContent = delPrice[i] + ' Р.';
                card.querySelector('.price-btn').textContent = newPrice[i] + ' Р.';
                card.querySelector('img').src = img[i];
        
								catalogItems.appendChild(card);
							
            };
        };
    };
		
	// для очистки предыдущей сортировки
	var listRemover = function() {
		var itemsRemoves = catalogItems.querySelectorAll('li');
		for(var i = 0; i < itemsRemoves.length; i++){
			var deleteElement = itemsRemoves[i];
			deleteElement.remove();

		};
	};
    listRemover();
		testUndefindetValueCard(arr);
    
    // for (var i = 0; i < 9; i++) {
    //     		var card = templateItem.cloneNode(true);
    //     		card.querySelector('h3').textContent = arrNames[i];
    //     		card.querySelector('del').textContent = delPrice[i] + ' Р.';
    //     		card.querySelector('.price-btn').textContent = newPrice[i] + ' Р.';
    //     		card.querySelector('img').src = img[i];
        
    //     		catalogItems.appendChild(card);
    //     	};

    BigCounterFunc();
};


renderPageDefault(cardItems);
// ОПРЕДЕЛЯЕТ КАКОЙ ТИП СОРТИРОВКИ ИСПОЛЬЗОВАТЬ
var typeSortingsItems = document.querySelectorAll('.sorting-list__item');

typeSortingsItems[0].addEventListener('click', function(evt){
	typeSortingsItems[0].classList.add
})



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



