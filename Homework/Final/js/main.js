$(document).ready(function(){
	$.getJSON('http://api.espn.com/v1/now?apikey=wz9xgsmyzk5dx3jxsudq62bs', function(data){
    $.each(data.feed, function(i, item){
      var headline = item.headline,
          web_url = item.links.web.href,
          description = item.description,
          news_item = "<li><a href=" + web_url + "><font size='5'>" + headline + "</font></a><p>" + description + "</p></li>";

      console.log("The Headline is " + headline); //use to test
      $('#espn_news ul').append(news_item);
    }) // end each
  }) //JSON
}); //jQuery
