"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GreetService = /** @class */ (function () {
    function GreetService() {
        this.greetedMap = new Map();
    }
    GreetService.prototype.greet = function (name) {
        var _a;
        this.greetedMap.set(name, ((_a = this.greetedMap.get(name)) !== null && _a !== void 0 ? _a : 0) + 1);
    };
    GreetService.prototype.greeted = function (name) {
        var _a;
        return (_a = this.greetedMap.get(name)) !== null && _a !== void 0 ? _a : 0;
    };
    return GreetService;
}());
exports.default = GreetService;
