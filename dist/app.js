"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
const port = 8080;
app.get('/', (req, res) => {
    let headers = req.headers;
    console.log("===Headers===");
    for (var h in headers) {
        console.log(h, headers[h]);
    }
    console.log("=============");
    console.log("IP Address:", req.socket.remoteAddress);
    res.send("test leakage");
});
app.listen(port, '0.0.0.0', () => {
    return console.log(`Express is listening at http://${port}`);
});
//# sourceMappingURL=app.js.map