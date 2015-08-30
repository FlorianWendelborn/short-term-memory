'use strict';

function Storage (time) {
    this.data = [];
    this.time = time;
}
Storage.prototype.add = function (key, value) {
    var that = this;
    this.data[key] = {
        value: value,
        timeout: setTimeout(function () {
            delete that.data[key];
        }, this.time)
    };
}

Storage.prototype.get = function (key) {
    if (this.data[key]) {
        var value = this.data[key].value;
        if (value) {
            delete this.data[key];
            return value;
        }
    } else {
        return false;
    }
}

// export
module.exports = Storage;
