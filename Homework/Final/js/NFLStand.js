$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/js/test.xml",
        dataType: "xml",
        success: function(xml) { parseXml(xml); }
    });
});

function parseXml(xml) {
    $(xml).find("conference").each(function () {
        var conName = $(this).attr("name");
        $('#Conference').append('<div id="' + conName + '"><h2>' + conName + '<h2></div>')
        $(this).find("division").each(function () {
            var divName = $(this).attr("name");
            $('#' + conName).append(divName + '<br>')
            $(this).find("team").each(function () {
                var teamName = '<div class="span1">' + $(this).attr("name") + '</div>';
                $(this).find("overall").each(function () {
                    var wins = '<div class="span1">' + $(this).attr("wins") + '</div>';
                    var loss = '<div class="span1">' + $(this).attr("losses") + '</div>';
                    var percent = $(this).attr("wpct");
                    $('#' + conName).append(teamName + wins + loss + percent + '<br>')
                });
            });
        });
    });
    
}
