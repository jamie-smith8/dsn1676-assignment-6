var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $btnSlide = $('.btn-move');
var $diamond = $('.diamond')

var $btnCollapse = $('.btn-collapse-expand');
var $panel = $('.panel')

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

var $btnAppend = $('.btn-append');
var $list = $('.list');

$btnShowHide.on('click', function () {
    $box.toggleClass('js-show-hide');
});

$btnSlide.on('click', function () {
    $diamond.toggleClass('js-slide');
});

$btnCollapse.on('click', function () {
   $panel.toggleClass('js-collapse'); 
});

$btnBounce.on('click', function () {
   $circle.addClass('js-ball-bounce'); 
});

$circle.on('webkitAnimationEnd animationend', function () {
    $circle.removeClass('js-ball-bounce');
});

$btnAppend.on('click', function () {
    var $li = $('<li>New list item</li>');
    $list.prepend($li);
    $li.addClass('js-btn-append');
});