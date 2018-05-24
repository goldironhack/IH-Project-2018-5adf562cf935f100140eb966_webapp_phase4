$(document).ready(function(){
    var map;
    $("#map").ready(function(){
        map=new google.maps.Map(document.getElementById('map'),{
            center: {lat: 40.7306107, lng: -73.935242},
            zoom: 10
        });
    });


    $.getJSON('https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD', function(results){;
        $.each(results, function(key,value){
            if(key==="data"){
                  console.log(value[0][16]);
            }
          
            
        });

    });


});
