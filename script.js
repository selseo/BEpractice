//$(document).ready(function() {
  var originalState = $("div#result").html();
  $("#searchbutton").click(function(e){
    $("div#result").html(originalState);
    e.preventDefault();
    //var query = $("input#query").val();
    var key=document.getElementsByName("keyword")[0].value;
    var service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
    var params = {
      'query': key,
      'limit': 15,
      'indent': true,
      'key' : 'AIzaSyAFo6_YHfL_4YiBB8A1KsidmbZYjCO0a_c',
    };
    $.getJSON(service_url + '?callback=?', params, function(response) {
      $.each(response.itemListElement, function(i, element) {
        //$('<div>', {
          //text:element['result']['name']
          //}
          //).appendTo(document.body);
        //$('<img>',{
          //  src:element['result']['image']['contentUrl']
          //}
          //).appendTo(document.body);
        //var des = $('<p>',{text: articleBody});
        var img = $('<img>',{src: element['result']['image']['contentUrl']});
        var h1 = $('<h1>',{text: element['result']['name']});
        var subh=$('<h2>',{text:element['result']['description']});
        var read=$('<a>',{href:element['result']['detailedDescription']['url'],text:"more>>"});
        var des=$('<h3>',{text: element['result']['detailedDescription']['articleBody']});
        //var h3 = $('<h3>',{text: description});
        //var ahref = detailUrl ? $('<a>',{href: detailUrl, text: "Read More..."}) : "";
        $('<div>').addClass("pin").append(h1).append(img).append(subh).append(des).append(read).appendTo("div#result");
        //$('<div>').addClass("pin").append(h1).append(img).append(h3).append(des).append(ahref).appendTo(document.body);
      });
    });
});
//});