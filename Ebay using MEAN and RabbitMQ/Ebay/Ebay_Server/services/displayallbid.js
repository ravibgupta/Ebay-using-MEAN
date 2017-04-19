/**
 * Created by Shrey on 10/28/2016.
 */
var Bid = require('../models/bid');


function handle_request(msg, callback){

    console.log("In handle request of Display all Bids");

    var res = {};
    var bidsellerid = msg.bidsellerid;


    Bid.find({ bidsellerid: {$ne:bidsellerid} }, function(err, results) {
        if (err){
            console.log("Error fetching  Info");
            res.code = "0";
        }
        else if (results) {

            console.log("All Bid Display successfull");
            res.code = "200";
            res.data = results;

        } else {
            console.log("data not found");
            res.code = "400";
        }

        callback(null, res);

    });
}

exports.handle_request = handle_request;




