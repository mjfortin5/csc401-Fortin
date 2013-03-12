$(document).ready(function(){
	$.getJSON('http://api.sportsdatallc.org/mlb-t3/rosters/2013.xml?api_key=7khwsvkdqguyyd86bvhc5f37', function(data){
    $.each(data.feed, function(i, item){
      var headline = item.headline,
          web_url = item.links.web.href,
          description = item.description,
          news_item = "<li><a href='" + web_url + "'>" + headline + "</a><p>" + description + "</p></li>";

      console.log("The Headline is " + headline); //use to test
      $('#players ul').append(news_item);
    }) // end each
  }) //JSON
}); //jQuery

var req = new XMLHttpRequest();  
req.open('GET', 'http://www.mydomain.com/', false);   
req.send(null);  
if(req.status == 200)  
   dump(req.responseText);