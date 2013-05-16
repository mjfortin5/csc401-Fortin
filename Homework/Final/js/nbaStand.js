$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/js/nbaSTAND.xml",
        dataType: "xml",
        success: function(xml) { parseXml(xml); }
    });
});

function parseXml(xml) {
    console.log("fired");
    $(xml).find("TeamRecord").each(function () {
        var conference = $(this).attr("conference");
        var division = $(this).attr("division");
        $('#Conference').append('<div id="' + division + '"></div><br>')
        $(this).find("Standing").each(function () {
            var team = '<div class="span3">' + $(this).attr("name") + '</div>';
            var wins = '<div class="span1">' + $(this).find("Won").text() + '</div>';
            var loss = '<div class="span1">' + $(this).find("Lost").text() + '</div>';
            var percentage = $(this).find("PCT").text();
            console.log(conference + division + team + wins + loss);
            $('#' + division).append(team + wins + loss + percentage + '<br>')
        });
    });
}

