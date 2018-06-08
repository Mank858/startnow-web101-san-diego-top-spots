$(document).ready(function() {
// write your code here
    $.getJSON("data.json", function (data) {
    var Spots='';
        $.each(data, function(key, val) {
        Spots+=("<tr>")
        Spots+=("<td>"+val.name+"</td>")
        Spots+=("<td>"+val.description+"</td>")
        var link='https://www.google.com/maps?q='+val.location[0]+','+val.location[1];
        Spots+=("<td>"+'<a href='+link+'>Open In Google Maps</a>'+"</td>")
        Spots+=("</tr>")
        });
        $("table").append(Spots)
      });
    });