var mouseX;
var mouseY;
$(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(document).on("mouseover, mousemove", "div#colombia path, div#colombia circle, div#departamentos path", function (e) {
    tooltip_map(e, this);
});
$(document).on("mouseleave", "div#colombia path, div#colombia circle, div#departamentos path", function (e) {
    $('#tooltipWindow').hide();
});

function tooltip_map(e, ele) {
    var name = $(ele).attr('title') != undefined ? $(ele).attr('title') : ($(ele).attr('name') != undefined ? $(ele).attr('name') : undefined);
    if (name != undefined && !$(ele).hasClass("disabled")) {
        $('#tooltipWindow div').html(name);
        $('#tooltipWindow').css('left', e.clientX + 10).css('top', e.clientY + 10).addClass($(ele).attr('class'));
        $('#tooltipWindow').show();
    } else {
        $('#tooltipWindow').hide();
    }
    //$("#prueba").html(`X: ${mouseX} | Y: ${mouseY} | V: ${name}`);
}