"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GreetServiceImpl = /** @class */ (function () {
    function GreetServiceImpl() {
        this.greetedMap = new Map();
    }
    GreetServiceImpl.prototype.greet = function (name) {
        var _a;
        this.greetedMap.set(name, ((_a = this.greetedMap.get(name)) !== null && _a !== void 0 ? _a : 0) + 1);
    };
    GreetServiceImpl.prototype.greeted = function (name) {
        var _a;
        return Promise.resolve((_a = this.greetedMap.get(name)) !== null && _a !== void 0 ? _a : 0);
    };
    return GreetServiceImpl;
}());
exports.default = GreetServiceImpl;
