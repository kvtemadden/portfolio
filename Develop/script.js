$(document).ready(function () {

$('#covidwise').attr('aria-expanded=false');

// $("button").click(function() {
//     var curBtn = $(this);
//     if (curBtn.attr("data-target", "covidwise")) {
//     $((div).attr("id", "covidwise")).collapse("show");
//     $((div).not("#covidwise")).collapse("hide");
//     }
// })

jQuery('button').click( function(e) {
    jQuery('.collapse').collapse('hide');
});

});