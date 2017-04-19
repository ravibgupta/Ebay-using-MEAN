/**
 * Created by Shrey on 10/28/2016.
 */

var User = require('../models/user');

function handle_request(msg, callback){

    console.log("In handle request of checkEmail");

    var res = {};
    var email1 = msg.email1;


    User.find({ email: email1}, function(err, results) {
        if (err){
            console.log("Error fetching  Info");
            res.code = "0";
        }
        else{if (results.length>0) {

            console.log("successfull");
            res.code = "400";
            res.data = results;

        } else {
            console.log("data not found");
            res.code = "200";
        }}

        callback(null, res);

    });
}

exports.handle_request = handle_request;