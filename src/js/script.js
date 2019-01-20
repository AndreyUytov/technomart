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