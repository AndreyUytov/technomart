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

});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
     if (popup.classList.contains("show-popup")) {
         evt.preventDefault();
         popup.classList.remove("show-popup");
         popup.classList.remove('shake-form');
        }
    }
});