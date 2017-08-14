'use strict';
module.exports = function (app) {
    var blinks = require('../controllers/blinkController');


    // todo Routes
    app.route('/blinks').get(blinks.list_all_blinks);
    app.route('/blinks').post(blinks.create_a_blink);


    //app.route('/blinks/:device_id')
    //    .get(blinks.read_a_device)
    //    .put(blinks.log_a_blink)
    //    .delete(todoList.delete_a_task);
};