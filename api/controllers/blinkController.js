'use strict';


var mongoose = require('mongoose'),
    Blink = mongoose.model('Blinks');

exports.list_all_blinks = function (req, res) {
    Blink.find({}, function (err, blink) {
        if (err)
            res.send(err);
        res.json(blink);
    });
};




exports.create_a_blink = function (req, res) {
    var new_blink = new Blink(req.body);    
    new_blink.save(function (err, blink) {
        if (err)
            res.send(err);
        res.json(blink);
    });
};


//exports.read_a_task = function (req, res) {
//    Task.findById(req.params.taskId, function (err, task) {
//        if (err)
//            res.send(err);
//        res.json(task);
//    });
//};


//exports.update_a_task = function (req, res) {
//    Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
//        if (err)
//            res.send(err);
//        res.json(task);
//    });
//};


//exports.delete_a_task = function (req, res) {


//    Task.remove({
//        _id: req.params.taskId
//    }, function (err, task) {
//        if (err)
//            res.send(err);
//        res.json({ message: 'Task successfully deleted' });
//    });
//};