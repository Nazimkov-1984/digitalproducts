(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// Search 
var link = document.querySelectorAll('.header__bar__item'),
    inp = document.querySelector('.header__input');
showMenu();

function showMenu() {
  link[1].addEventListener('click', function () {
    var styleInput = window.getComputedStyle(inp);

    if (styleInput.display === 'none') {
      inp.style.display = 'block';
    } else {
      inp.style.display = 'none';
    }

    event.preventDefault(link[1]);
  });
} // tabs   


var tabs = document.querySelectorAll('.about__tabs__item'),
    tabsContent = document.querySelectorAll('.about__cards__item'),
    tabsParent = document.querySelector('.about__tabs');

function hideTabContent() {
  tabsContent.forEach(function (item) {
    item.style.display = 'none';
  });
  tabs.forEach(function (item) {
    item.classList.remove('about__tabs__item--active');
  });
}

function showTabContent() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  tabsContent[i].style.display = 'flex';
  tabs[i].classList.add('about__tabs__item--active');
}

hideTabContent();
showTabContent(0);
tabsParent.addEventListener('click', function (event) {
  var target = event.target;

  if (target && target.classList.contains('about__tabs__item')) {
    tabs.forEach(function (item, i) {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
}); // accordeon 

var qestions = document.querySelectorAll('.asked__accord__item__title'),
    content = document.querySelectorAll('.asked__accord__item__text');
content.forEach(function (item) {
  item.style.display = 'none';
});

var _loop = function _loop(i) {
  qestions[i].addEventListener('click', function () {
    var st = window.getComputedStyle(content[i]);

    if (st.display === 'none') {
      content[i].style.display = 'block';
    } else {
      content[i].style.display = 'none';
    }
  });
};

for (var i = 0; i < qestions.length; i++) {
  _loop(i);
} //slider testimonials


var sliders = document.querySelectorAll('.testimonials__list__item');
var prev = document.querySelector('.testimonials__arrow--left');
var next = document.querySelector('.testimonials__arrow--right');
var slideIndex = 1;
showSlide(slideIndex);

function showSlide(n) {
  if (n > sliders.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = sliders.length;
  }

  sliders.forEach(function (item) {
    return item.style.display = 'none';
  });
  sliders[slideIndex - 1].style.display = '';
}

function plusSlides(n) {
  showSlide(slideIndex += n);
}

prev.addEventListener('click', function () {
  plusSlides(-1);
});
next.addEventListener('click', function () {
  plusSlides(1);
}); // end slider

var position = 0;
var slidesToShow = 3;
var slidesToScroll = 1;
var container = document.querySelector('.product__carusel__container'),
    track = document.querySelector('.product__carusel'),
    items = document.querySelectorAll('.product__carusel__item'),
    itemsCount = items.length,
    btnPrev = document.querySelector('.product__button__left'),
    btnNext = document.querySelector('.product__button__right'),
    itemWidth = container.clientWidth / slidesToShow,
    movePosition = slidesToScroll * itemWidth;
items.forEach(function (item) {
  item.style.minWidth = "".concat(itemWidth, "px");
});

var setPosition = function setPosition() {
  track.style.transform = "translateX(".concat(position, "px)");
};

var checkBtns = function checkBtns() {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

btnPrev.addEventListener('click', function () {
  var itemsLeft = Math.abs(position) / itemWidth;
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});
btnNext.addEventListener('click', function () {
  var itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});
checkBtns();

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9kaWdpdGFscHJvZHVjdHMvc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFFQSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMkIsb0JBQTNCLENBQWI7QUFBQSxJQUNRLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF3QixnQkFBeEIsQ0FEZDtBQUdRLFFBQVE7O0FBR1osU0FBUyxRQUFULEdBQW9CO0FBQ2hCLEVBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDckMsUUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLGdCQUFQLENBQXdCLEdBQXhCLENBQW5COztBQUVBLFFBQUksVUFBVSxDQUFDLE9BQVgsS0FBdUIsTUFBM0IsRUFBbUM7QUFDL0IsTUFBQSxHQUFHLENBQUMsS0FBSixDQUFVLE9BQVYsR0FBb0IsT0FBcEI7QUFDSCxLQUZELE1BRU07QUFDTCxNQUFBLEdBQUcsQ0FBQyxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNBOztBQUNELElBQUEsS0FBSyxDQUFDLGNBQU4sQ0FBcUIsSUFBSSxDQUFDLENBQUQsQ0FBekI7QUFDRixHQVREO0FBVUgsQyxDQUdEOzs7QUFDQSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsb0JBQTFCLENBQWI7QUFBQSxJQUNGLFdBQVcsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIscUJBQTFCLENBRFo7QUFBQSxJQUVJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUZqQjs7QUFJSSxTQUFTLGNBQVQsR0FBMkI7QUFDM0IsRUFBQSxXQUFXLENBQUMsT0FBWixDQUFvQixVQUFBLElBQUksRUFBSTtBQUN4QixJQUFBLElBQUksQ0FBQyxLQUFMLENBQVcsT0FB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O0FBQ3BCLEVBQUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxRQUFYLGFBQXlCLFNBQXpCO0FBQ0gsQ0FGRDs7QUFHQSxJQUFNLFdBQVcsR0FBRyxTQUFkLFdBQWMsR0FBTTtBQUN0QixFQUFBLEtBQUssQ0FBQyxLQUFOLENBQVksU0FBWix3QkFBc0MsUUFBdEM7QUFDSCxDQUZEOztBQUdBLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBWSxHQUFNO0FBQ3hCLEVBQUEsT0FBTyxDQUFDLFFBQVIsR0FBbUIsUUFBUSxLQUFLLENBQWhDO0FBQ0EsRUFBQSxPQUFPLENBQUMsUUFBUixHQUFtQixRQUFRLElBQUksRUFBRSxVQUFVLEdBQUcsWUFBZixJQUErQixTQUE5RDtBQUNDLENBSEQ7O0FBS0EsT0FBTyxDQUFDLGdCQUFSLENBQXlCLE9BQXpCLEVBQWlDLFlBQU07QUFDbkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxRQUFULElBQXFCLFNBQXZDO0FBQ0EsRUFBQSxRQUFRLElBQUksU0FBUyxJQUFJLGNBQWIsR0FBOEIsWUFBOUIsR0FBNkMsU0FBUyxHQUFHLFNBQXJFO0FBQ0EsRUFBQSxXQUFXO0FBQ1gsRUFBQSxTQUFTO0FBQ1osQ0FMRDtBQU1BLE9BQU8sQ0FBQyxnQkFBUixDQUF5QixPQUF6QixFQUFpQyxZQUFNO0FBQ25DLE1BQU0sU0FBUyxHQUFHLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFMLENBQVMsUUFBVCxJQUFxQixZQUFZLEdBQUcsU0FBckMsSUFBa0QsU0FBakY7QUFDQSxFQUFBLFFBQVEsSUFBSSxTQUFTLElBQUksY0FBYixHQUE4QixZQUE5QixHQUE2QyxTQUFTLEdBQUcsU0FBckU7QUFDQSxFQUFBLFdBQVc7QUFDWCxFQUFBLFNBQVM7QUFDWixDQUxEO0FBTUEsU0FBUyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gU2VhcmNoIFxyXG5cclxuY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgKCcuaGVhZGVyX19iYXJfX2l0ZW0nKSxcclxuICAgICAgICBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLmhlYWRlcl9faW5wdXQnKTsgXHJcblxyXG4gICAgICAgIHNob3dNZW51ICgpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93TWVudSgpIHtcclxuICAgICAgICBsaW5rWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgIGNvbnN0IHN0eWxlSW5wdXQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpbnApO1xyXG5cclxuICAgICAgICAgICBpZiAoc3R5bGVJbnB1dC5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgaW5wLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaW5wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KGxpbmtbMV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBcclxuXHJcblxyXG4gICAgLy8gdGFicyAgIFxyXG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dF9fdGFic19faXRlbScpLFxyXG5cdFx0dGFic0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2NhcmRzX19pdGVtJyksXHJcbiAgICAgICAgdGFic1BhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fdGFicycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVUYWJDb250ZW50ICgpIHtcclxuICAgICAgICB0YWJzQ29udGVudC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSApO1xyXG4gICAgICAgIHRhYnMuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWJvdXRfX3RhYnNfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dUYWJDb250ZW50IChpID0gMCkge1xyXG4gICAgICAgIHRhYnNDb250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgdGFic1tpXS5jbGFzc0xpc3QuYWRkKCdhYm91dF9fdGFic19faXRlbS0tYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVRhYkNvbnRlbnQoKTtcclxuICAgIHNob3dUYWJDb250ZW50KDApO1xyXG5cclxuICAgIHRhYnNQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWJvdXRfX3RhYnNfX2l0ZW0nKSkge1xyXG4gICAgICAgICAgICB0YWJzLmZvckVhY2ggKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlVGFiQ29udGVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dUYWJDb250ZW50KGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiBcclxuXHJcbiAgICAvLyBhY2NvcmRlb24gXHJcblxyXG4gICAgY29uc3QgcWVzdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsICgnLmFza2VkX19hY2NvcmRfX2l0ZW1fX3RpdGxlJyksIFxyXG4gICAgICAgICAgICBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCAoJy5hc2tlZF9fYWNjb3JkX19pdGVtX190ZXh0Jyk7IFxyXG5cclxuICAgIGNvbnRlbnQuZm9yRWFjaCAoaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgaT0wOyBpPHFlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcWVzdGlvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3QgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250ZW50W2ldKTtcclxuICAgICAgICAgICAgaWYgKHN0LmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgY29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbi8vc2xpZGVyIHRlc3RpbW9uaWFsc1xyXG5jb25zdCBzbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlc3RpbW9uaWFsc19fbGlzdF9faXRlbScpO1xyXG5jb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3RpbW9uaWFsc19fYXJyb3ctLWxlZnQnKTtcclxuY29uc3QgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0aW1vbmlhbHNfX2Fycm93LS1yaWdodCcpO1xyXG5sZXQgc2xpZGVJbmRleCA9IDE7XHJcblxyXG5zaG93U2xpZGUoc2xpZGVJbmRleCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3dTbGlkZSAobikge1xyXG4gICAgICAgICAgICBpZiAobiA+IHNsaWRlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobjwxKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gc2xpZGVycy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2xpZGVycy5mb3JFYWNoIChpdGVtID0+IGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJyApO1xyXG5cclxuICAgICAgICAgICAgc2xpZGVyc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBsdXNTbGlkZXMobikge1xyXG4gICAgICAgICAgICBzaG93U2xpZGUoc2xpZGVJbmRleCArPW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcGx1c1NsaWRlcygtMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV4dC5hZGRFdmVudExpc3RlbmVyICgnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBsdXNTbGlkZXMoMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gZW5kIHNsaWRlclxyXG5cclxuXHJcbmxldCBwb3NpdGlvbiA9IDA7XHJcbmNvbnN0IHNsaWRlc1RvU2hvdyA9IDM7XHJcbmNvbnN0ICBzbGlkZXNUb1Njcm9sbCA9IDE7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fY2FydXNlbF9fY29udGFpbmVyJyksXHJcbiAgICAgICAgdHJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fY2FydXNlbCcpLFxyXG4gICAgICAgIGl0ZW1zID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdF9fY2FydXNlbF9faXRlbScpLFxyXG4gICAgICAgIGl0ZW1zQ291bnQgPSBpdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgYnRuUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X19idXR0b25fX2xlZnQnKSwgXHJcbiAgICAgICAgYnRuTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X19idXR0b25fX3JpZ2h0JyksIFxyXG4gICAgICAgIGl0ZW1XaWR0aCA9IChjb250YWluZXIuY2xpZW50V2lkdGgpIC8gc2xpZGVzVG9TaG93LFxyXG4gICAgICAgIG1vdmVQb3NpdGlvbiA9IHNsaWRlc1RvU2Nyb2xsICogaXRlbVdpZHRoO1xyXG5cclxuIFxyXG5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLnN0eWxlLm1pbldpZHRoID0gYCR7aXRlbVdpZHRofXB4YDtcclxufSk7XHJcbmNvbnN0IHNldFBvc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgdHJhY2suc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtwb3NpdGlvbn1weClgO1xyXG59O1xyXG5jb25zdCBjaGVja0J0bnMgPSAoKSA9PiB7XHJcbmJ0blByZXYuZGlzYWJsZWQgPSBwb3NpdGlvbiA9PT0gMDtcclxuYnRuTmV4dC5kaXNhYmxlZCA9IHBvc2l0aW9uIDw9IC0oaXRlbXNDb3VudCAtIHNsaWRlc1RvU2hvdykgKiBpdGVtV2lkdGg7XHJcbn07XHJcblxyXG5idG5QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtc0xlZnQgPSBNYXRoLmFicyhwb3NpdGlvbikgLyBpdGVtV2lkdGg7XHJcbiAgICBwb3NpdGlvbiArPSBpdGVtc0xlZnQgPj0gc2xpZGVzVG9TY3JvbGwgPyBtb3ZlUG9zaXRpb24gOiBpdGVtc0xlZnQgKiBpdGVtV2lkdGg7XHJcbiAgICBzZXRQb3NpdGlvbigpOyAgXHJcbiAgICBjaGVja0J0bnMoKTsgIFxyXG59KTtcclxuYnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXNMZWZ0ID0gaXRlbXNDb3VudCAtIChNYXRoLmFicyhwb3NpdGlvbikgKyBzbGlkZXNUb1Nob3cgKiBpdGVtV2lkdGgpIC8gaXRlbVdpZHRoO1xyXG4gICAgcG9zaXRpb24gLT0gaXRlbXNMZWZ0ID49IHNsaWRlc1RvU2Nyb2xsID8gbW92ZVBvc2l0aW9uIDogaXRlbXNMZWZ0ICogaXRlbVdpZHRoO1xyXG4gICAgc2V0UG9zaXRpb24gKCk7XHJcbiAgICBjaGVja0J0bnMoKTtcclxufSk7XHJcbmNoZWNrQnRucygpO1xyXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSndjbTlxWldOMGN5OWthV2RwZEdGc2NISnZaSFZqZEhNdmMzSmpMMnB6TDJGd2NDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN08wRkRRVUU3UVVGRlFTeEpRVUZOTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1owSkJRVlFzUTBGQk1rSXNiMEpCUVROQ0xFTkJRV0k3UVVGQlFTeEpRVU5STEVkQlFVY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGM1FpeG5Ra0ZCZUVJc1EwRkVaRHRCUVVkUkxGRkJRVkU3TzBGQlIxb3NVMEZCVXl4UlFVRlVMRWRCUVc5Q08wRkJRMmhDTEVWQlFVRXNTVUZCU1N4RFFVRkRMRU5CUVVRc1EwRkJTaXhEUVVGUkxHZENRVUZTTEVOQlFYbENMRTlCUVhwQ0xFVkJRV3RETEZsQlFVMDdRVUZEY2tNc1VVRkJUU3hWUVVGVkxFZEJRVWNzVFVGQlRTeERRVUZETEdkQ1FVRlFMRU5CUVhkQ0xFZEJRWGhDTEVOQlFXNUNPenRCUVVWQkxGRkJRVWtzVlVGQlZTeERRVUZETEU5QlFWZ3NTMEZCZFVJc1RVRkJNMElzUlVGQmJVTTdRVUZETDBJc1RVRkJRU3hIUVVGSExFTkJRVU1zUzBGQlNpeERRVUZWTEU5QlFWWXNSMEZCYjBJc1QwRkJjRUk3UVVGRFNDeExRVVpFTEUxQlJVMDdRVUZEVEN4TlFVRkJMRWRCUVVjc1EwRkJReXhMUVVGS0xFTkJRVlVzVDBGQlZpeEhRVUZ2UWl4TlFVRndRanRCUVVOQk96dEJRVU5FTEVsQlFVRXNTMEZCU3l4RFFVRkRMR05CUVU0c1EwRkJjVUlzU1VGQlNTeERRVUZETEVOQlFVUXNRMEZCZWtJN1FVRkRSaXhIUVZSRU8wRkJWVWdzUXl4RFFVZEVPenM3UVVGRFFTeEpRVUZOTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1owSkJRVlFzUTBGQk1FSXNiMEpCUVRGQ0xFTkJRV0k3UVVGQlFTeEpRVU5HTEZkQlFWY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1owSkJRVlFzUTBGQk1FSXNjVUpCUVRGQ0xFTkJSRm83UVVGQlFTeEpRVVZKTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGMVFpeGpRVUYyUWl4RFFVWnFRanM3UVVGSlNTeFRRVUZUTEdOQlFWUXNSMEZCTWtJN1FVRkRNMElzUlVGQlFTeFhRVUZYTEVOQlFVTXNUMEZCV2l4RFFVRnZRaXhWUVVGQkxFbEJRVWtzUlVGQlNUdEJRVU40UWl4SlFVRkJMRWxCUVVrc1EwRkJReXhMUVVGTUxFTkJRVmNzVDBGQldDeEhRVUZ4UWl4TlFVRnlRanRCUVVOSUxFZEJSa1E3UVVGSFFTeEZRVUZCTEVsQlFVa3NRMEZCUXl4UFFVRk1MRU5CUVdNc1ZVRkJRU3hKUVVGSkxFVkJRVWs3UVVGRGJFSXNTVUZCUVN4SlFVRkpMRU5CUVVNc1UwRkJUQ3hEUVVGbExFMUJRV1lzUTBGQmMwSXNNa0pCUVhSQ08wRkJRMGdzUjBGR1JEdEJRVWRJT3p0QlFVVkVMRk5CUVZNc1kwRkJWQ3hIUVVGblF6dEJRVUZCTEUxQlFWQXNRMEZCVHl4MVJVRkJTQ3hEUVVGSE8wRkJRelZDTEVWQlFVRXNWMEZCVnl4RFFVRkRMRU5CUVVRc1EwRkJXQ3hEUVVGbExFdEJRV1lzUTBGQmNVSXNUMEZCY2tJc1IwRkJLMElzVFVGQkwwSTdRVUZEUVN4RlFVRkJMRWxCUVVrc1EwRkJReXhEUVVGRUxFTkJRVW9zUTBGQlVTeFRRVUZTTEVOQlFXdENMRWRCUVd4Q0xFTkJRWE5DTERKQ1FVRjBRanRCUVVOSU96dEJRVVZFTEdOQlFXTTdRVUZEWkN4alFVRmpMRU5CUVVNc1EwRkJSQ3hEUVVGa08wRkJSVUVzVlVGQlZTeERRVUZETEdkQ1FVRllMRU5CUVRaQ0xFOUJRVGRDTEVWQlFYTkRMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRemRETEUxQlFVMHNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGeVFqczdRVUZEUVN4TlFVRkpMRTFCUVUwc1NVRkJTU3hOUVVGTkxFTkJRVU1zVTBGQlVDeERRVUZwUWl4UlFVRnFRaXhEUVVFd1FpeHRRa0ZCTVVJc1EwRkJaQ3hGUVVFNFJEdEJRVU14UkN4SlFVRkJMRWxCUVVrc1EwRkJReXhQUVVGTUxFTkJRV01zVlVGQlF5eEpRVUZFTEVWQlFVOHNRMEZCVUN4RlFVRmhPMEZCUTNaQ0xGVkJRVWtzVFVGQlRTeEpRVUZKTEVsQlFXUXNSVUZCYjBJN1FVRkRhRUlzVVVGQlFTeGpRVUZqTzBGQlEyUXNVVUZCUVN4alFVRmpMRU5CUVVNc1EwRkJSQ3hEUVVGa08wRkJRMGc3UVVGRFNpeExRVXhFTzBGQlRVZzdRVUZEU2l4RFFWWkVMRVVzUTBGalFUczdRVUZGUVN4SlFVRk5MRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zWjBKQlFWUXNRMEZCTWtJc05rSkJRVE5DTEVOQlFXcENPMEZCUVVFc1NVRkRVU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdkQ1FVRlVMRU5CUVRKQ0xEUkNRVUV6UWl4RFFVUnNRanRCUVVkQkxFOUJRVThzUTBGQlF5eFBRVUZTTEVOQlFXbENMRlZCUVVFc1NVRkJTU3hGUVVGSk8wRkJRM0pDTEVWQlFVRXNTVUZCU1N4RFFVRkRMRXRCUVV3c1EwRkJWeXhQUVVGWUxFZEJRWEZDTEUxQlFYSkNPMEZCUTBnc1EwRkdSRHM3TWtKQlNWTXNRenRCUVVOTUxFVkJRVUVzVVVGQlVTeERRVUZETEVOQlFVUXNRMEZCVWl4RFFVRlpMR2RDUVVGYUxFTkJRVGhDTEU5QlFUbENMRVZCUVhWRExGbEJRVTA3UVVGRGVrTXNVVUZCU1N4RlFVRkZMRWRCUVVjc1RVRkJUU3hEUVVGRExHZENRVUZRTEVOQlFYZENMRTlCUVU4c1EwRkJReXhEUVVGRUxFTkJRUzlDTEVOQlFWUTdPMEZCUTBFc1VVRkJTU3hGUVVGRkxFTkJRVU1zVDBGQlNDeExRVUZsTEUxQlFXNUNMRVZCUVRKQ08wRkJRM1pDTEUxQlFVRXNUMEZCVHl4RFFVRkRMRU5CUVVRc1EwRkJVQ3hEUVVGWExFdEJRVmdzUTBGQmFVSXNUMEZCYWtJc1IwRkJNa0lzVDBGQk0wSTdRVUZEU0N4TFFVWkVMRTFCUlU4N1FVRkRTQ3hOUVVGQkxFOUJRVThzUTBGQlF5eERRVUZFTEVOQlFWQXNRMEZCVnl4TFFVRllMRU5CUVdsQ0xFOUJRV3BDTEVkQlFUSkNMRTFCUVROQ08wRkJRMGc3UVVGRFNpeEhRVkJFT3pzN1FVRkVTaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZETEVOQlFWZ3NSVUZCWXl4RFFVRkRMRWRCUVVNc1VVRkJVU3hEUVVGRExFMUJRWHBDTEVWQlFXbERMRU5CUVVNc1JVRkJiRU1zUlVGQmMwTTdRVUZCUVN4UlFVRTNRaXhEUVVFMlFqdEJRVk55UXl4RExFTkJRMHc3T3p0QlFVTkJMRWxCUVUwc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eG5Ra0ZCVkN4RFFVRXdRaXd5UWtGQk1VSXNRMEZCYUVJN1FVRkRRU3hKUVVGTkxFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjFRaXcwUWtGQmRrSXNRMEZCWWp0QlFVTkJMRWxCUVUwc1NVRkJTU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMRFpDUVVGMlFpeERRVUZpTzBGQlEwRXNTVUZCU1N4VlFVRlZMRWRCUVVjc1EwRkJha0k3UVVGRlFTeFRRVUZUTEVOQlFVTXNWVUZCUkN4RFFVRlVPenRCUVVWUkxGTkJRVk1zVTBGQlZDeERRVUZ2UWl4RFFVRndRaXhGUVVGMVFqdEJRVU51UWl4TlFVRkpMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQmFFSXNSVUZCZDBJN1FVRkRjRUlzU1VGQlFTeFZRVUZWTEVkQlFVY3NRMEZCWWp0QlFVTklPenRCUVVORUxFMUJRVWtzUTBGQlF5eEhRVUZETEVOQlFVNHNSVUZCVXp0QlFVTk1MRWxCUVVFc1ZVRkJWU3hIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZ5UWp0QlFVTklPenRCUVVORUxFVkJRVUVzVDBGQlR5eERRVUZETEU5QlFWSXNRMEZCYVVJc1ZVRkJRU3hKUVVGSk8wRkJRVUVzVjBGQlNTeEpRVUZKTEVOQlFVTXNTMEZCVEN4RFFVRlhMRTlCUVZnc1IwRkJjVUlzVFVGQmVrSTdRVUZCUVN4SFFVRnlRanRCUVVWQkxFVkJRVUVzVDBGQlR5eERRVUZETEZWQlFWVXNSMEZCUXl4RFFVRmFMRU5CUVZBc1EwRkJjMElzUzBGQmRFSXNRMEZCTkVJc1QwRkJOVUlzUjBGQmMwTXNSVUZCZEVNN1FVRkRTRHM3UVVGRlJDeFRRVUZUTEZWQlFWUXNRMEZCYjBJc1EwRkJjRUlzUlVGQmRVSTdRVUZEYmtJc1JVRkJRU3hUUVVGVExFTkJRVU1zVlVGQlZTeEpRVUZITEVOQlFXUXNRMEZCVkR0QlFVTklPenRCUVVORUxFbEJRVWtzUTBGQlF5eG5Ra0ZCVEN4RFFVRjFRaXhQUVVGMlFpeEZRVUZuUXl4WlFVRk5PMEZCUTJ4RExFVkJRVUVzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUml4RFFVRldPMEZCUTBnc1EwRkdSRHRCUVVkQkxFbEJRVWtzUTBGQlF5eG5Ra0ZCVEN4RFFVRjFRaXhQUVVGMlFpeEZRVUZuUXl4WlFVRk5PMEZCUTJ4RExFVkJRVUVzVlVGQlZTeERRVUZETEVOQlFVUXNRMEZCVmp0QlFVTklMRU5CUmtRc1JTeERRVWRCT3p0QlFVZFNMRWxCUVVrc1VVRkJVU3hIUVVGSExFTkJRV1k3UVVGRFFTeEpRVUZOTEZsQlFWa3NSMEZCUnl4RFFVRnlRanRCUVVOQkxFbEJRVThzWTBGQll5eEhRVUZITEVOQlFYaENPMEZCUlVFc1NVRkJUU3hUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFWUXNRMEZCZFVJc09FSkJRWFpDTEVOQlFXeENPMEZCUVVFc1NVRkRVU3hMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFWUXNRMEZCZFVJc2JVSkJRWFpDTEVOQlJHaENPMEZCUVVFc1NVRkZVU3hMUVVGTExFZEJRVVVzVVVGQlVTeERRVUZETEdkQ1FVRlVMRU5CUVRCQ0xIbENRVUV4UWl4RFFVWm1PMEZCUVVFc1NVRkhVU3hWUVVGVkxFZEJRVWNzUzBGQlN5eERRVUZETEUxQlNETkNPMEZCUVVFc1NVRkpVU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFWUXNRMEZCZFVJc2QwSkJRWFpDTEVOQlNteENPMEZCUVVFc1NVRkxVU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFWUXNRMEZCZFVJc2VVSkJRWFpDTEVOQlRHeENPMEZCUVVFc1NVRk5VU3hUUVVGVExFZEJRVWtzVTBGQlV5eERRVUZETEZkQlFWZ3NSMEZCTUVJc1dVRk9PVU03UVVGQlFTeEpRVTlSTEZsQlFWa3NSMEZCUnl4alFVRmpMRWRCUVVjc1UwRlFlRU03UVVGVlFTeExRVUZMTEVOQlFVTXNUMEZCVGl4RFFVRmpMRlZCUVVNc1NVRkJSQ3hGUVVGVk8wRkJRM0JDTEVWQlFVRXNTVUZCU1N4RFFVRkRMRXRCUVV3c1EwRkJWeXhSUVVGWUxHRkJRWGxDTEZOQlFYcENPMEZCUTBnc1EwRkdSRHM3UVVGSFFTeEpRVUZOTEZkQlFWY3NSMEZCUnl4VFFVRmtMRmRCUVdNc1IwRkJUVHRCUVVOMFFpeEZRVUZCTEV0QlFVc3NRMEZCUXl4TFFVRk9MRU5CUVZrc1UwRkJXaXgzUWtGQmMwTXNVVUZCZEVNN1FVRkRTQ3hEUVVaRU96dEJRVWRCTEVsQlFVMHNVMEZCVXl4SFFVRkhMRk5CUVZvc1UwRkJXU3hIUVVGTk8wRkJRM2hDTEVWQlFVRXNUMEZCVHl4RFFVRkRMRkZCUVZJc1IwRkJiVUlzVVVGQlVTeExRVUZMTEVOQlFXaERPMEZCUTBFc1JVRkJRU3hQUVVGUExFTkJRVU1zVVVGQlVpeEhRVUZ0UWl4UlFVRlJMRWxCUVVrc1JVRkJSU3hWUVVGVkxFZEJRVWNzV1VGQlppeEpRVUVyUWl4VFFVRTVSRHRCUVVORExFTkJTRVE3TzBGQlMwRXNUMEZCVHl4RFFVRkRMR2RDUVVGU0xFTkJRWGxDTEU5QlFYcENMRVZCUVdsRExGbEJRVTA3UVVGRGJrTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVXdzUTBGQlV5eFJRVUZVTEVsQlFYRkNMRk5CUVhaRE8wRkJRMEVzUlVGQlFTeFJRVUZSTEVsQlFVa3NVMEZCVXl4SlFVRkpMR05CUVdJc1IwRkJPRUlzV1VGQk9VSXNSMEZCTmtNc1UwRkJVeXhIUVVGSExGTkJRWEpGTzBGQlEwRXNSVUZCUVN4WFFVRlhPMEZCUTFnc1JVRkJRU3hUUVVGVE8wRkJRMW9zUTBGTVJEdEJRVTFCTEU5QlFVOHNRMEZCUXl4blFrRkJVaXhEUVVGNVFpeFBRVUY2UWl4RlFVRnBReXhaUVVGTk8wRkJRMjVETEUxQlFVMHNVMEZCVXl4SFFVRkhMRlZCUVZVc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZNTEVOQlFWTXNVVUZCVkN4SlFVRnhRaXhaUVVGWkxFZEJRVWNzVTBGQmNrTXNTVUZCYTBRc1UwRkJha1k3UVVGRFFTeEZRVUZCTEZGQlFWRXNTVUZCU1N4VFFVRlRMRWxCUVVrc1kwRkJZaXhIUVVFNFFpeFpRVUU1UWl4SFFVRTJReXhUUVVGVExFZEJRVWNzVTBGQmNrVTdRVUZEUVN4RlFVRkJMRmRCUVZjN1FVRkRXQ3hGUVVGQkxGTkJRVk03UVVGRFdpeERRVXhFTzBGQlRVRXNVMEZCVXlJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVLQ2w3Wm5WdVkzUnBiMjRnY2lobExHNHNkQ2w3Wm5WdVkzUnBiMjRnYnlocExHWXBlMmxtS0NGdVcybGRLWHRwWmlnaFpWdHBYU2w3ZG1GeUlHTTlYQ0ptZFc1amRHbHZibHdpUFQxMGVYQmxiMllnY21WeGRXbHlaU1ltY21WeGRXbHlaVHRwWmlnaFppWW1ZeWx5WlhSMWNtNGdZeWhwTENFd0tUdHBaaWgxS1hKbGRIVnliaUIxS0drc0lUQXBPM1poY2lCaFBXNWxkeUJGY25KdmNpaGNJa05oYm01dmRDQm1hVzVrSUcxdlpIVnNaU0FuWENJcmFTdGNJaWRjSWlrN2RHaHliM2NnWVM1amIyUmxQVndpVFU5RVZVeEZYMDVQVkY5R1QxVk9SRndpTEdGOWRtRnlJSEE5Ymx0cFhUMTdaWGh3YjNKMGN6cDdmWDA3WlZ0cFhWc3dYUzVqWVd4c0tIQXVaWGh3YjNKMGN5eG1kVzVqZEdsdmJpaHlLWHQyWVhJZ2JqMWxXMmxkV3pGZFczSmRPM0psZEhWeWJpQnZLRzU4ZkhJcGZTeHdMSEF1Wlhod2IzSjBjeXh5TEdVc2JpeDBLWDF5WlhSMWNtNGdibHRwWFM1bGVIQnZjblJ6ZldadmNpaDJZWElnZFQxY0ltWjFibU4wYVc5dVhDSTlQWFI1Y0dWdlppQnlaWEYxYVhKbEppWnlaWEYxYVhKbExHazlNRHRwUEhRdWJHVnVaM1JvTzJrckt5bHZLSFJiYVYwcE8zSmxkSFZ5YmlCdmZYSmxkSFZ5YmlCeWZTa29LU0lzSWk4dklGTmxZWEpqYUNCY2NseHVYSEpjYm1OdmJuTjBJR3hwYm1zZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0lDZ25MbWhsWVdSbGNsOWZZbUZ5WDE5cGRHVnRKeWtzWEhKY2JpQWdJQ0FnSUNBZ2FXNXdJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpQW9KeTVvWldGa1pYSmZYMmx1Y0hWMEp5azdJRnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnphRzkzVFdWdWRTQW9LVHRjY2x4dVhISmNibHh5WEc0Z0lDQWdablZ1WTNScGIyNGdjMmh2ZDAxbGJuVW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2JHbHVhMXN4WFM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNncElEMCtJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCemRIbHNaVWx1Y0hWMElEMGdkMmx1Wkc5M0xtZGxkRU52YlhCMWRHVmtVM1I1YkdVb2FXNXdLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnYVdZZ0tITjBlV3hsU1c1d2RYUXVaR2x6Y0d4aGVTQTlQVDBnSjI1dmJtVW5LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsdWNDNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oySnNiMk5ySnp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0I5Wld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbHVjQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdKMjV2Ym1Vbk8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0JsZG1WdWRDNXdjbVYyWlc1MFJHVm1ZWFZzZENoc2FXNXJXekZkS1R0Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDBnWEhKY2JseHlYRzVjY2x4dUlDQWdJQzh2SUhSaFluTWdJQ0JjY2x4dUlDQWdJR052Ym5OMElIUmhZbk1nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdVlXSnZkWFJmWDNSaFluTmZYMmwwWlcwbktTeGNjbHh1WEhSY2RIUmhZbk5EYjI1MFpXNTBJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duTG1GaWIzVjBYMTlqWVhKa2MxOWZhWFJsYlNjcExGeHlYRzRnSUNBZ0lDQWdJSFJoWW5OUVlYSmxiblFnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1WVdKdmRYUmZYM1JoWW5NbktUdGNjbHh1SUNBZ0lDQWdJQ0JjY2x4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2YmlCb2FXUmxWR0ZpUTI5dWRHVnVkQ0FvS1NCN1hISmNiaUFnSUNBZ0lDQWdkR0ZpYzBOdmJuUmxiblF1Wm05eVJXRmphQ2hwZEdWdElEMCtJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhWFJsYlM1emRIbHNaUzVrYVhOd2JHRjVJRDBnSjI1dmJtVW5PMXh5WEc0Z0lDQWdJQ0FnSUgwZ0tUdGNjbHh1SUNBZ0lDQWdJQ0IwWVdKekxtWnZja1ZoWTJnb0lHbDBaVzBnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcGRHVnRMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMkZpYjNWMFgxOTBZV0p6WDE5cGRHVnRMUzFoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JtZFc1amRHbHZiaUJ6YUc5M1ZHRmlRMjl1ZEdWdWRDQW9hU0E5SURBcElIdGNjbHh1SUNBZ0lDQWdJQ0IwWVdKelEyOXVkR1Z1ZEZ0cFhTNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oyWnNaWGduTzF4eVhHNGdJQ0FnSUNBZ0lIUmhZbk5iYVYwdVkyeGhjM05NYVhOMExtRmtaQ2duWVdKdmRYUmZYM1JoWW5OZlgybDBaVzB0TFdGamRHbDJaU2NwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHaHBaR1ZVWVdKRGIyNTBaVzUwS0NrN1hISmNiaUFnSUNCemFHOTNWR0ZpUTI5dWRHVnVkQ2d3S1R0Y2NseHVYSEpjYmlBZ0lDQjBZV0p6VUdGeVpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSWdLQ2RqYkdsamF5Y3NJQ2hsZG1WdWRDa2dQVDRnZTF4eVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUhSaGNtZGxkQ0E5SUdWMlpXNTBMblJoY21kbGREdGNjbHh1SUNBZ0lDQWdJQ0JwWmlBb2RHRnlaMlYwSUNZbUlIUmhjbWRsZEM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyRmliM1YwWDE5MFlXSnpYMTlwZEdWdEp5a3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR0ZpY3k1bWIzSkZZV05vSUNnb2FYUmxiU3dnYVNrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUmhjbWRsZENBOVBTQnBkR1Z0S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdsa1pWUmhZa052Ym5SbGJuUW9LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnphRzkzVkdGaVEyOXVkR1Z1ZENocEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZTazdYSEpjYmx4eVhHNGdYSEpjYmx4eVhHNGdJQ0FnTHk4Z1lXTmpiM0prWlc5dUlGeHlYRzVjY2x4dUlDQWdJR052Ym5OMElIRmxjM1JwYjI1eklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDQW9KeTVoYzJ0bFpGOWZZV05qYjNKa1gxOXBkR1Z0WDE5MGFYUnNaU2NwTENCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWRHVnVkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dnS0NjdVlYTnJaV1JmWDJGalkyOXlaRjlmYVhSbGJWOWZkR1Y0ZENjcE95QmNjbHh1WEhKY2JpQWdJQ0JqYjI1MFpXNTBMbVp2Y2tWaFkyZ2dLR2wwWlcwZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUdsMFpXMHVjM1I1YkdVdVpHbHpjR3hoZVNBOUlDZHViMjVsSnp0Y2NseHVJQ0FnSUgwcE8xeHlYRzVjY2x4dUlDQWdJR1p2Y2lBb2JHVjBJR2s5TURzZ2FUeHhaWE4wYVc5dWN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNGdJQ0FnSUNBZ0lIRmxjM1JwYjI1elcybGRMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSWdLQ2RqYkdsamF5Y3NJQ2dwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSE4wSUQwZ2QybHVaRzkzTG1kbGRFTnZiWEIxZEdWa1UzUjViR1VvWTI5dWRHVnVkRnRwWFNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHpkQzVrYVhOd2JHRjVJRDA5UFNBbmJtOXVaU2NwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJsYm5SYmFWMHVjM1I1YkdVdVpHbHpjR3hoZVNBOUlDZGliRzlqYXljN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNTBaVzUwVzJsZExuTjBlV3hsTG1ScGMzQnNZWGtnUFNBbmJtOXVaU2M3SUNCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdmVnh5WEc0dkwzTnNhV1JsY2lCMFpYTjBhVzF2Ym1saGJITmNjbHh1WTI5dWMzUWdjMnhwWkdWeWN5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTUwWlhOMGFXMXZibWxoYkhOZlgyeHBjM1JmWDJsMFpXMG5LVHRjY2x4dVkyOXVjM1FnY0hKbGRpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NTBaWE4wYVcxdmJtbGhiSE5mWDJGeWNtOTNMUzFzWldaMEp5azdYSEpjYm1OdmJuTjBJRzVsZUhRZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWRHVnpkR2x0YjI1cFlXeHpYMTloY25KdmR5MHRjbWxuYUhRbktUdGNjbHh1YkdWMElITnNhV1JsU1c1a1pYZ2dQU0F4TzF4eVhHNWNjbHh1YzJodmQxTnNhV1JsS0hOc2FXUmxTVzVrWlhncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2YmlCemFHOTNVMnhwWkdVZ0tHNHBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0c0Z1BpQnpiR2xrWlhKekxteGxibWQwYUNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMnhwWkdWSmJtUmxlQ0E5SURFN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHNDhNU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MyeHBaR1ZKYm1SbGVDQTlJSE5zYVdSbGNuTXViR1Z1WjNSb08xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhOc2FXUmxjbk11Wm05eVJXRmphQ0FvYVhSbGJTQTlQaUJwZEdWdExuTjBlV3hsTG1ScGMzQnNZWGtnUFNBbmJtOXVaU2NnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITnNhV1JsY25OYmMyeHBaR1ZKYm1SbGVDMHhYUzV6ZEhsc1pTNWthWE53YkdGNUlEMGdKeWM3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2YmlCd2JIVnpVMnhwWkdWektHNHBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjMmh2ZDFOc2FXUmxLSE5zYVdSbFNXNWtaWGdnS3oxdUtUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2NISmxkaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlJQ2duWTJ4cFkyc25MQ0FvS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnNkWE5UYkdsa1pYTW9MVEVwTzF4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdJQ0FnSUc1bGVIUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpQW9KMk5zYVdOckp5d2dLQ2tnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCd2JIVnpVMnhwWkdWektERXBPMXh5WEc0Z0lDQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ0lDQWdJQzh2SUdWdVpDQnpiR2xrWlhKY2NseHVYSEpjYmx4eVhHNXNaWFFnY0c5emFYUnBiMjRnUFNBd08xeHlYRzVqYjI1emRDQnpiR2xrWlhOVWIxTm9iM2NnUFNBek8xeHlYRzVqYjI1emRDQWdjMnhwWkdWelZHOVRZM0p2Ykd3Z1BTQXhPMXh5WEc1Y2NseHVZMjl1YzNRZ1kyOXVkR0ZwYm1WeUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuQnliMlIxWTNSZlgyTmhjblZ6Wld4ZlgyTnZiblJoYVc1bGNpY3BMRnh5WEc0Z0lDQWdJQ0FnSUhSeVlXTnJJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbkJ5YjJSMVkzUmZYMk5oY25WelpXd25LU3hjY2x4dUlDQWdJQ0FnSUNCcGRHVnRjeUE5Wkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duTG5CeWIyUjFZM1JmWDJOaGNuVnpaV3hmWDJsMFpXMG5LU3hjY2x4dUlDQWdJQ0FnSUNCcGRHVnRjME52ZFc1MElEMGdhWFJsYlhNdWJHVnVaM1JvTEZ4eVhHNGdJQ0FnSUNBZ0lHSjBibEJ5WlhZZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWNISnZaSFZqZEY5ZlluVjBkRzl1WDE5c1pXWjBKeWtzSUZ4eVhHNGdJQ0FnSUNBZ0lHSjBiazVsZUhRZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWNISnZaSFZqZEY5ZlluVjBkRzl1WDE5eWFXZG9kQ2NwTENCY2NseHVJQ0FnSUNBZ0lDQnBkR1Z0VjJsa2RHZ2dQU0FvWTI5dWRHRnBibVZ5TG1Oc2FXVnVkRmRwWkhSb0tTQXZJSE5zYVdSbGMxUnZVMmh2ZHl4Y2NseHVJQ0FnSUNBZ0lDQnRiM1psVUc5emFYUnBiMjRnUFNCemJHbGtaWE5VYjFOamNtOXNiQ0FxSUdsMFpXMVhhV1IwYUR0Y2NseHVYSEpjYmlCY2NseHVhWFJsYlhNdVptOXlSV0ZqYUNnb2FYUmxiU2tnUFQ0Z2UxeHlYRzRnSUNBZ2FYUmxiUzV6ZEhsc1pTNXRhVzVYYVdSMGFDQTlJR0FrZTJsMFpXMVhhV1IwYUgxd2VHQTdYSEpjYm4wcE8xeHlYRzVqYjI1emRDQnpaWFJRYjNOcGRHbHZiaUE5SUNncElEMCtJSHRjY2x4dUlDQWdJSFJ5WVdOckxuTjBlV3hsTG5SeVlXNXpabTl5YlNBOUlHQjBjbUZ1YzJ4aGRHVllLQ1I3Y0c5emFYUnBiMjU5Y0hncFlEdGNjbHh1ZlR0Y2NseHVZMjl1YzNRZ1kyaGxZMnRDZEc1eklEMGdLQ2tnUFQ0Z2UxeHlYRzVpZEc1UWNtVjJMbVJwYzJGaWJHVmtJRDBnY0c5emFYUnBiMjRnUFQwOUlEQTdYSEpjYm1KMGJrNWxlSFF1WkdsellXSnNaV1FnUFNCd2IzTnBkR2x2YmlBOFBTQXRLR2wwWlcxelEyOTFiblFnTFNCemJHbGtaWE5VYjFOb2IzY3BJQ29nYVhSbGJWZHBaSFJvTzF4eVhHNTlPMXh5WEc1Y2NseHVZblJ1VUhKbGRpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0tDa2dQVDRnZTF4eVhHNGdJQ0FnWTI5dWMzUWdhWFJsYlhOTVpXWjBJRDBnVFdGMGFDNWhZbk1vY0c5emFYUnBiMjRwSUM4Z2FYUmxiVmRwWkhSb08xeHlYRzRnSUNBZ2NHOXphWFJwYjI0Z0t6MGdhWFJsYlhOTVpXWjBJRDQ5SUhOc2FXUmxjMVJ2VTJOeWIyeHNJRDhnYlc5MlpWQnZjMmwwYVc5dUlEb2dhWFJsYlhOTVpXWjBJQ29nYVhSbGJWZHBaSFJvTzF4eVhHNGdJQ0FnYzJWMFVHOXphWFJwYjI0b0tUc2dJRnh5WEc0Z0lDQWdZMmhsWTJ0Q2RHNXpLQ2s3SUNCY2NseHVmU2s3WEhKY2JtSjBiazVsZUhRdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENncElEMCtJSHRjY2x4dUlDQWdJR052Ym5OMElHbDBaVzF6VEdWbWRDQTlJR2wwWlcxelEyOTFiblFnTFNBb1RXRjBhQzVoWW5Nb2NHOXphWFJwYjI0cElDc2djMnhwWkdWelZHOVRhRzkzSUNvZ2FYUmxiVmRwWkhSb0tTQXZJR2wwWlcxWGFXUjBhRHRjY2x4dUlDQWdJSEJ2YzJsMGFXOXVJQzA5SUdsMFpXMXpUR1ZtZENBK1BTQnpiR2xrWlhOVWIxTmpjbTlzYkNBL0lHMXZkbVZRYjNOcGRHbHZiaUE2SUdsMFpXMXpUR1ZtZENBcUlHbDBaVzFYYVdSMGFEdGNjbHh1SUNBZ0lITmxkRkJ2YzJsMGFXOXVJQ2dwTzF4eVhHNGdJQ0FnWTJobFkydENkRzV6S0NrN1hISmNibjBwTzF4eVhHNWphR1ZqYTBKMGJuTW9LVHRjY2x4dUlsMTkifQ==
