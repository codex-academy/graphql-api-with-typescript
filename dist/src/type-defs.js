"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\ttype Query {\n\t\thello(name : String) : String!,\n\t\tgreeted (name: String) : String\n\t}\n\n"], ["\n\ttype Query {\n\t\thello(name : String) : String!,\n\t\tgreeted (name: String) : String\n\t}\n\n"])));
exports.default = typeDefs;
var templateObject_1;
