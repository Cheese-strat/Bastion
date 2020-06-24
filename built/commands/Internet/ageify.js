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
    name: 'ageify',
    description: 'I can guess how old someone is based on their name',
    cat: "misc",
    args: true,
    usage: '<name>',
    cooldown: 3,
    aliases: ['age', "age-test", "agetest", 'oldie', "boomer-test", "boomerness"],
    execute: function (msg, args, pokemon, data, client) {
        return __awaiter(this, void 0, void 0, function () {
            var web, colour, embed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://api.agify.io?name=" + args[0]).then(function (response) { return response.json(); })];
                    case 1:
                        web = _a.sent();
                        colour = [0, 0, 255];
                        if (web.age > 10) {
                            colour = [26, 0, 229];
                        }
                        if (web.age > 20) {
                            colour = [51, 0, 204];
                        }
                        if (web.age > 30) {
                            colour = [78, 0, 178];
                        }
                        if (web.age > 40) {
                            colour = [102, 0, 153];
                        }
                        if (web.age > 50) {
                            colour = [128, 1, 128];
                        }
                        if (web.age > 60) {
                            colour = [153, 1, 102];
                        }
                        if (web.age > 70) {
                            colour = [178, 1, 77];
                        }
                        if (web.age > 80) {
                            colour = [204, 1, 51];
                        }
                        if (web.age > 90) {
                            colour = [229, 1, 26];
                        }
                        if (web.age > 100) {
                            colour = [255, 1, 0];
                        }
                        embed = ez.embed(colour, "Boomer test!");
                        embed.setDescription("The predicted age for " + web.name + " is " + web.age + " years old.");
                        embed.setFooter("This result was taken from " + web.count + " different counts");
                        msg.channel.send(embed);
                        return [2 /*return*/];
                }
            });
        });
    }
};
