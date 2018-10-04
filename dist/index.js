"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $Array = /** @class */ (function () {
    function $Array(array) {
        if (array === void 0) { array = []; }
        var _this_1 = this;
        this.array = array;
        this.first = function () {
            return _this_1.array[0];
        };
        this.last = function () {
            return _this_1.array[_this_1.array.length - 1];
        };
        this.findElIndex = function (elm) {
            var index = -1;
            _this_1.array.forEach(function (e, index_) {
                if (e === elm)
                    index = index_;
            });
            return index;
        };
        this.has = function (elm) {
            return _this_1.findElIndex(elm) > -1;
        };
        this.delete = function (elm) {
            var nbrDeleted = 0;
            var index = _this_1.findElIndex(elm);
            if (index > -1) {
                _this_1.array.splice(index, 1);
                nbrDeleted++;
                nbrDeleted = nbrDeleted + _this_1.delete(elm);
            }
            return nbrDeleted;
        };
        this.elementsNotIn = function (array_filter) {
            var _this = _this_1.clone();
            if (Array.isArray(array_filter))
                array_filter.forEach(function (e) {
                    (new $Array(_this)).delete(e);
                });
            return _this;
        };
        this.clone = function () {
            return _this_1.array.slice(0);
        };
    }
    return $Array;
}());
var $Object = /** @class */ (function () {
    function $Object(object) {
        this.object = object;
    }
    $Object.prototype.clone = function (obj) {
        return Object().assign({}, obj);
    };
    return $Object;
}());
var jsHelper = {
    // The install method is all that needs to exist on the plugin object.
    // It takes the global Vue object as well as user-defined options.
    install: function (Vue, options) {
        if (Vue === void 0) { Vue = null; }
        if (options === void 0) { options = []; }
        // @ts-ignore
        window.$Object = $Object;
        // @ts-ignore
        window.$Array = $Array;
    }
};
exports.default = jsHelper;
