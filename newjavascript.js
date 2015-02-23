$.getJSON("newjson.json",function(data){
    console.log(data);
    $('body').append(data.name);
});