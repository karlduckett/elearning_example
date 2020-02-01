cards = []

$('.card').hide()

window.onload = function() {
    document.getElementById("loader").style.display = "none";

    cards = $('.wrapper').children('.card')
    display_cards()
};

function display_cards() {
    for (let i = 0; i < cards.length; i++) {
        setTimeout(function timer() {
            console.log(cards[i]);
            $(cards[i]).css('display', 'flex');
            $(cards[i]).addClass('fadeInUp animated')
        }, i * 300);
    }
}

$('#close_icon').click(function() {
    $('#welcome_alert').addClass('fadeOutUp animated')
    setTimeout("$('#welcome_alert').hide()", 400);
})