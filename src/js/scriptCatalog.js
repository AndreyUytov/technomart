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

