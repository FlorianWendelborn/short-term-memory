'use strict';

function Storage (options) {
    this.data = [];
    this.duration = options.duration;
}
Storage.prototype.add = function (key, value) {
    var that = this;
    this.data[key] = {
        value: value,
        timeout: setTimeout(function () {
            delete that.data[key];
        }, this.duration)
    };
};

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

// export
module.exports = Storage;
