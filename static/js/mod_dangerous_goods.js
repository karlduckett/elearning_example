window.onload = function() {
    document.getElementById("loader").style.display = "none";
};

window.onbeforeunload = function() {
    return "Leaving this page will reset the progress";
}


//START PAGE BTN
$("#start_btn").click(function() {
    $("#page_1").hide()
    $('#page_2').show()
});


//SIDE BAR BTN
$('#dg_content_holder_p2').hide()
$('#dg_content_holder_assessment').hide()
$("#dg_content_holder_assessment_test").hide()

$('#dg_p1_btn').click(function() {
    $('#dg_content_holder_p1').show()
    $('#dg_content_holder_p2').hide()
    $('#dg_content_holder_assessment').hide()

    $('.list-group').children('a').each(function() {
        $(this).removeClass('list-group-item-success') // "this" is the current element in the loop
    });

    $('#dg_p1_btn').removeClass('list-group-item-light')
    $('#dg_p1_btn').addClass('list-group-item-success')
})

$('#dg_p2_btn').click(function() {
    $('#dg_content_holder_p1').hide()
    $('#dg_content_holder_assessment').hide()
    $('#dg_content_holder_p2').show()

    $('.list-group').children('a').each(function() {
        $(this).removeClass('list-group-item-success') // "this" is the current element in the loop
    });

    $('#dg_p2_btn').removeClass('list-group-item-light')
    $('#dg_p2_btn').addClass('list-group-item-success')
})

$('#dg_p_ass').click(function() {
    $('#dg_content_holder_p1').hide()
    $('#dg_content_holder_p2').hide()
    $('#dg_content_holder_assessment').show()

    $('.list-group').children('a').each(function() {
        $(this).removeClass('list-group-item-success') // "this" is the current element in the loop
    });

    $('#dg_p_ass').removeClass('list-group-item-light')
    $('#dg_p_ass').addClass('list-group-item-success')
})

$('#start_dg_assessment').click(function() {
    $(window).off('beforeunload.windowReload');
    $(window).unbind('beforeunload');
    window.location.href = '/dangerous_goods_assessment'
})