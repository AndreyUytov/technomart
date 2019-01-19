'use strict';

var buttons = document.querySelectorAll('.services-btn');
var sliders = document.querySelectorAll('.services-slider');
var activeBtns = document.querySelectorAll("services-btn--active");
var cleanClass = function () {
    for (var ind = 0; ind<activeBtns.length; ind++) {
        var activeBtn = activeBtns[ind];
        activeBtn.classList.remove("services-btn--active");
    };
    console.log(ind);
}

var addClickListener = function(button) {
    button.addEventListener('click', function(evt){
        evt.preventDefault();
        if (!button.classList.contains("services-btn--active")){
            button.classList.add("services-btn--active");
        };

    })
};
var addShowSlider = function (slider) {
    slider.classList.add("show-service");
}

for(var i=0; i<buttons.length; i++){
    cleanClass();
    var button = buttons[i];
    addClickListener(button);
};