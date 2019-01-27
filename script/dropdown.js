var btn = $('#btn-show');
var dropdown = $('#dropdown-menu');
var flag = true;

btn.click(function () {

    if (flag) {
        dropdown.slideDown();

    } else {

        dropdown.slideUp();
    }
    flag = !flag;
});

$('.menu-btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn-active');
});