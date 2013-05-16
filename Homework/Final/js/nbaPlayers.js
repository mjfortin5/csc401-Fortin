$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/js/nbaPlayers.xml",
        dataType: "xml",
        success: function(xml) { 
            parseXml(xml); 
        }
    });
    var input = " ";
    $('#dropDown').change(function() {
        hideDivs();
        input = $(this).val();
        $('#' + input).show();
    });
});
function parseXml(xml) {
    $(xml).find("Team").each(function () {
        var smyid = $(this).find("SYMID").text();
        $('#master-team').append('<div id="' + smyid + '"></div>')
        console.log(smyid);
        $.each($(this), function () {
            var first_name = $(this).find("Player").text();
            console.log("Player info: hello" + first_name );
            $('#' + smyid).append(first_name);
        });
 
    });
    hideDivs();

}
function hideDivs() {
    $('#BOS').hide();
    $('#ATL').hide();
    $('#NYK').hide();
    $('#PHI').hide();
    $('#TOR').hide();
    $('#BRO').hide();
    $('#CHA').hide();
    $('#MIA').hide();
    $('#WAS').hide();
    $('#UTA').hide();
    $('#SAC').hide();
    $('#POR').hide();
    $('#CLE').hide();
    $('#OKC').hide();
    $('#MIN').hide();
    $('#ORL').hide();
    $('#DET').hide();
    $('#CHI').hide();
    $('#NOH').hide();
    $('#MIL').hide();
    $('#MEM').hide();
    $('#IND').hide();
    $('#DAL').hide();
    $('#HOU').hide();
    $('#GS').hide();
    $('#SA').hide();
    $('#PHO').hide();
    $('#DEN').hide();
    $('#LAC').hide();
    $('#LAL').hide();
}