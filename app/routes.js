// dependencies
var mongoose = require('mongoose'),
    User = require('./model.js');

// opens app routes
module.exports = function(app) {
    
    //GET routes
    
    //Retrieve records for all users in the db
    app.get('/users', function(req, res){
        
        //uses mongoose schema to run the search (empty conditions)
        var query = User.find({});
        query.exec(function(err, users){
            if(err)
                res.send(err);
                
            // if no errors found, respond with JSON of all users
            res.json(users);
            
        });
    });
    
    //POST routes
    //provide method for saving new users in the db
    app.post('/users', function(req, res){
        //create new user based on mongoose schema and post body
        var newuser = new User(req.body);
        
        //new User is saved in the db.
        newuser.save(function(err){
            if(err)
                res.send(err);
            
            //if no errors are found, responds with a JSON of the new user
            res.json(req.body);
        });
    });
    
    
};