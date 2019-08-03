var queryURL="https://api.giphy.com/v1/gifs/trending?api_key=nVK0M6ubefhRmpL022qjNKGv8ceSpomN";

$.ajax({
    url:queryURL,
    method:'GET',
}).then(function(response){
   console.log(response);
})