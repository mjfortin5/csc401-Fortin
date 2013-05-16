$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/js/Players.xml",
        dataType: "xml",
        success: function(xml) { parseXml(xml); }
    });
    var test = " ";

    $('#dropDown').change(function() {
        hideDivs();
        test = $(this).val();
        $('#' + test).show();
    });
});
function parseXml(xml) {
    console.log("fired");
    $(xml).find("team").each(function () {
        var teamName = $(this).attr("name");
        var player = $(this).find("profile");  
        $('#master-team').append('<div id="' + teamName + '"></div>')
        jQuery.each(player, function() {
            var firstName = '<div class="first span2"> ' + 
                $(this).find("first").text() + '</div>';
            var lastName = '<div class="last span2"> ' + 
                $(this).find("last").text() + '</div>';
            var debut = '<div class="pro_debut span2"> ' + 
                $(this).find("pro_debut").text() + '</div>';
            var birthDate = '<div class="birthdate span2"> ' + 
                $(this).find("birthdate").text() + '</div>';
            var batHand = '<div class="bat span1"> ' + 
                $(this).find("bat_hand").text() + '</div>';
            var throwHand = '<div class="bat span1"> ' + 
                $(this).find("throw_hand").text() + '</div>';
            $('#' + teamName).append('<div class="test">' + firstName + lastName + debut + birthDate + batHand + throwHand + '</div>')
       });        
    });
    hideDivs();
}
function hideDivs() {
    $('#RedSox').hide();
    $('#Braves').hide();
    $('#Yankees').hide();
    $('#Phillies').hide();
    $('#BlueJays').hide();
    $('#Mets').hide();
    $('#Orioles').hide();
    $('#Marlins').hide();
    $('#Rays').hide();
    $('#Nationals').hide();
    $('#WhiteSox').hide();
    $('#Cardinals').hide();
    $('#Indians').hide();
    $('#Astros').hide();
    $('#Twins').hide();
    $('#Brewers').hide();
    $('#Tigers').hide();
    $('#Cubs').hide();
    $('#Royals').hide();
    $('#Reds').hide();
    $('#Pirates').hide();
    $('#Angels').hide();
    $('#Padres').hide();
    $('#Athletics').hide();
    $('#Giants').hide();
    $('#Rangers').hide();
    $('#Diamondbacks').hide();
    $('#Mariners').hide();
    $('#Dodgers').hide();
    $('#Rockies').hide();
}