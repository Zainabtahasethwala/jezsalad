$(document).ready(function(){
    $('.menutoggle').click(function(){
        $('body').toggleClass('opened');
        $('.menu_item').toggleClass('menuopened')
    });
});
