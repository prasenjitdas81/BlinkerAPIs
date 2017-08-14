'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BlinkerSchema = new Schema({
    device_identity: {
        type: String        
    },
    log_date: {
        type: Date,
        default: Date.now
    },
    device_signal: {
        type: String        
    }
});

module.exports = mongoose.model('Blinks', BlinkerSchema);