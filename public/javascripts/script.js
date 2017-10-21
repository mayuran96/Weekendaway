function findFlight()
{
    console.log("button clicked");
   $.post('users/destinations', function(data) {
        console.log(data[0].name);//name of the first value from the map sent
    });

}

