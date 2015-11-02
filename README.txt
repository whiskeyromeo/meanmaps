--This app is from the ScotchIo meanMapApp tutorial(part1)
==================================
11.2.2015

==============


All functioning, run mongod in one terminal, node server.js in another 
Uses the google maps api to create pins via formdata
geolocation via either clicking positions on the gmap or by HTML5 geolocation

TODO:
    Figure out the error currently being presented in inspector
     -> Assertion Failed: InvalidValueError: setCenter: not a LatLng or LatLngLiteral: 
     in property lat: not a number
     
    --> according to stack, this is happeneing because the code
    using latlng type is being executed before the api is fully loaded.
    Figure out exactly where the api load is occurring...