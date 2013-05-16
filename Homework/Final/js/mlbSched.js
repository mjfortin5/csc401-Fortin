$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/js/schedule.xml",
        dataType: "xml",
        success: function(xml) { parseXml(xml); }
    });
});

function parseXml(xml) {
    $(xml).find("league").each(function() {
        var league = $(this).attr("id");
        $('#Division').append('<br><br><br><br><div id="' + league + '"><h1>' + league + '</h1></div>');
        var division = $(this).find("division");
        jQuery.each(division, function() {
            var section = $(this).attr("id");
            var num = $(this).attr("num");
            $('#Division').append('<div id="' + league + '"><div id="' + num + '"><h3>' + section + '</h3></div></div>')
            var team = $(this).find("team");
            jQuery.each(team, function() {
    			var mascot = '<div class="span2">' + $(this).attr("name") + '</div>';
                var mascot1 = $(this).attr("name");
    			var win = '<div class="span1">' + $(this).attr("win") + '</div>';
                var loss = '<div class="span1">' + $(this).attr("loss") + '</div>';
                var back = '<div class="span1">' + $(this).attr("games_back") + '</div>';
                var percent = '<div class="span1">' + $(this).attr("win_p") + '</div>';
                var streak = '<div class="span1">' + $(this).attr("streak") + '</div>';
                $('#' + num).append('<div id="' + mascot1 + '" class="test1 span12">' + mascot + win + loss + percent + back + streak + '</div>');
            });
        });
    });
}