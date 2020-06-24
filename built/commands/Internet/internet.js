var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ez = require("../../ez.js");
var fetch = require("node-fetch");
module.exports = {
    name: 'internet',
    description: 'is the template to copy commands from, has all options enabled',
    cat: "misc",
    args: true,
    usage: '<category>',
    cooldown: 5,
    execute: function (msg, args, pokemon, data, client) {
        return __awaiter(this, void 0, void 0, function () {
            var Arguments, web, embed_1, web, embed_2, web, embed_3, web, embed_4, embed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Arguments = args.join(" ");
                        if (!Arguments.includes("fox")) return [3 /*break*/, 2];
                        return [4 /*yield*/, fetch("https://randomfox.ca/floof/").then(function (response) { return response.json(); })];
                    case 1:
                        web = _a.sent();
                        if (!web)
                            return [2 /*return*/, msg.channel.send("Something went wrong.")];
                        embed_1 = ez.embed('#EFFF00', "Foxes are cute");
                        embed_1.setImage(web.image);
                        return [2 /*return*/, msg.channel.send(embed_1)];
                    case 2:
                        if (!Arguments.includes("cat")) return [3 /*break*/, 4];
                        return [4 /*yield*/, fetch("https://aws.random.cat/meow").then(function (response) { return response.json(); })];
                    case 3:
                        web = _a.sent();
                        if (!web)
                            return [2 /*return*/, msg.channel.send("Something went wrong.")];
                        embed_2 = ez.embed('#EFFF00', "Cats cute");
                        embed_2.setImage(web.file);
                        return [2 /*return*/, msg.channel.send(embed_2)];
                    case 4:
                        if (!Arguments.includes("dog")) return [3 /*break*/, 6];
                        return [4 /*yield*/, fetch("https://random.dog/woof.json").then(function (response) { return response.json(); })];
                    case 5:
                        web = _a.sent();
                        if (!web)
                            return [2 /*return*/, msg.channel.send("Something went wrong.")];
                        embed_3 = ez.embed('#EFFF00', "Best dogs around");
                        embed_3.setImage(web.url);
                        return [2 /*return*/, msg.channel.send(embed_3)];
                    case 6:
                        if (!(Arguments.includes("chuck") || Arguments.includes("norris"))) return [3 /*break*/, 8];
                        return [4 /*yield*/, fetch("https://api.chucknorris.io/jokes/random").then(function (response) { return response.json(); })];
                    case 7:
                        web = _a.sent();
                        if (!web)
                            return [2 /*return*/, msg.channel.send("Something went wrong.")];
                        embed_4 = ez.embed('#EFFF00', "Chuck Norris!");
                        embed_4.setDescription(web.value);
                        return [2 /*return*/, msg.channel.send(embed_4)];
                    case 8:
                        embed = ez.embed('#EFFF00', "User: wants something else\nMe:");
                        embed.setImage("https://i.imgur.com/p4VJHkd.png");
                        embed.setFooter("pick from one of the categories: cats, dogs or foxes");
                        return [2 /*return*/, msg.channel.send(embed)];
                }
            });
        });
    }
};
