"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apee_router_1 = require("apee-router");
new apee_router_1.Router({
    routeSet: [
        ['home', function (route) { return console.log(route); }]
    ]
}).start();
