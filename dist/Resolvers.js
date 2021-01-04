"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Resolvers(greetService) {
    return {
        Query: {
            hello: function (_, params) {
                greetService.greet(params.name);
                return "Hello, " + params.name + "!";
            },
            greeted: function (_, params) {
                var qty = greetService.greeted(params.name);
                if (!qty) {
                    return "Nope!";
                }
                return params.name + " was greeted " + qty + " times";
            }
        }
    };
}
exports.default = Resolvers;
