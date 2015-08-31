'use strict';

/**
 *	Returns a new storage.
 *
 *	@example
 *	var myStorage = new Storage({duration: 10000});
 *
 *	@param options {Object} storage options, currently only duration
 *	@return {Object instanceof Storage}
 */
function Storage (options) {
    this.data = [];
    this.duration = options.duration;
}

/**
 *	Adds an unique token to the storage.
 *
 *	@example
 *	myStorage.add('unique token key', {example: 'data'});
 *
 *	@param key {String} the unique token key
 *	@param value {*} the data to store
 *	@return {undefined}
 */
Storage.prototype.add = function (key, value) {
    var that = this;
    this.data[key] = {
        value: value,
        timeout: setTimeout(function () {
            delete that.data[key];
        }, this.duration)
    };
};

/**
 *	Retrieves an unique token from the storage and removes it from the storage.
 *
 *	@example
 *	var token = myStorage.add('unique token key');
 *  if (token !== false) console.log('token valid, contains stored data')
 *
 *	@param key {String} the unique token key
 *	@return {*, false}
 */
Storage.prototype.get = function (key) {
    if (this.data[key]) {
        var value = this.data[key].value;
        clearTimeout(this.data[key].timeout);
        delete this.data[key];
        return value;
    } else {
        return false;
    }
};

module.exports = Storage;
