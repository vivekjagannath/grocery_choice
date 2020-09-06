var close = document.querySelector('#close');
var modal = document.querySelector('.modal');
close.addEventListener('click', function () {
    modal.classList.toggle('close');
});
var open = document.querySelector('.open');
open.addEventListener('click', function () {
    modal.classList.toggle('close');
});