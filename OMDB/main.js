$(document).ready(function(){
  console.log("document started");
})

var createRow=function(data){
    var tBody=$("tbody");
    var tRow=$("<tr>");

    //methods run on jQuery slectors return the selector we run on
    //This is why we can create and save a reference to a td in the same statement we update its text

    var titleTd =$("<td>").text(data.Title);
    var yearTd =$("<td>").text(data.Year);
    var actorsTd=$("<td>").text(data.Actors);

    //Append the newly created table data to the table row

    tRow.append(titleTd,yearTd,actorsTd);

    tBody.append(tRow);

}
 var searchOMDB=function(movie){
     
$.ajax({
    url:"https://www.omdbapi.com/?t=boiler+room&y=&plot=short&apikey=trilogy",
    method:"GET"
}).then(function(response){
    createRow(response);
})
  
$.ajax({
    url:"https://www.omdbapi.com/?t=boiler+room&y=&plot=short&apikey=trilogy",
    method:"GET"
}).then(function(response){
    createRow(response);
})

$.ajax({
    url:"https://www.omdbapi.com/?t=boiler+room&y=&plot=short&apikey=trilogy",
    method:"GET"
}).then(function(response){
    createRow(response);
})

$.ajax({
    url:"https://www.omdbapi.com/?t=boiler+room&y=&plot=short&apikey=trilogy",
    method:"GET"
}).then(function(response){
    createRow(response);
})

 }

searchOMDB("Fight Club");
searchOMDB("Tropic Thunder");
searchOMDB("Beerfest");



console.log("Because AJAX responses are asynchronous,this line of code will ;likely log firjst")