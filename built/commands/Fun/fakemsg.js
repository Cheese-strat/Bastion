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
var _a = require("../../ez.js"), getmember = _a.getmember, update = _a.update;
module.exports = {
    name: 'fakemsg',
    description: 'Uses webhooks to send a fake message as a specified user',
    args: true,
    usage: '<target> <string to send>',
    cooldown: 10,
    aliases: ['fake', 'fakemessage', 'fmsg', 'fm'],
    dev: true,
    name: __filename.slice(0, -3),
    description: "",
    args: {
        required: false,
        case: false,
        usage: ""
    },
    cooldown: 3,
    aliases: ["pong"],
    permissions: {
        bot: [
            "CREATE_INSTANT_INVITE",
            "KICK_MEMBERS",
            "BAN_MEMBERS",
            "MANAGE_CHANNELS",
            "MANAGE_GUILD",
            "ADD_REACTIONS",
            "VIEW_AUDIT_LOG",
            "PRIORITY_SPEAKER",
            "STREAM",
            "VIEW_CHANNEL",
            "SEND_MESSAGES",
            "SEND_TTS_MESSAGES",
            "MANAGE_MESSAGES",
            "EMBED_LINKS",
            "ATTACH_FILES",
            "READ_MESSAGE_HISTORY",
            "MENTION_EVERYONE",
            "USE_EXTERNAL_EMOJIS",
            "VIEW_GUILD_INSIGHTS",
            "CONNECT",
            "SPEAK",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MOVE_MEMBERS",
            "USE_VAD",
            "CHANGE_NICKNAME",
            "MANAGE_NICKNAMES",
            "MANAGE_ROLES",
            "MANAGE_WEBHOOKS",
            "MANAGE_EMOJIS"
        ],
        author: [
            "CREATE_INSTANT_INVITE",
            "KICK_MEMBERS",
            "BAN_MEMBERS",
            "MANAGE_CHANNELS",
            "MANAGE_GUILD",
            "ADD_REACTIONS",
            "VIEW_AUDIT_LOG",
            "PRIORITY_SPEAKER",
            "STREAM",
            "VIEW_CHANNEL",
            "SEND_MESSAGES",
            "SEND_TTS_MESSAGES",
            "MANAGE_MESSAGES",
            "EMBED_LINKS",
            "ATTACH_FILES",
            "READ_MESSAGE_HISTORY",
            "MENTION_EVERYONE",
            "USE_EXTERNAL_EMOJIS",
            "VIEW_GUILD_INSIGHTS",
            "CONNECT",
            "SPEAK",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MOVE_MEMBERS",
            "USE_VAD",
            "CHANGE_NICKNAME",
            "MANAGE_NICKNAMES",
            "MANAGE_ROLES",
            "MANAGE_WEBHOOKS",
            "MANAGE_EMOJIS"
        ],
        mentions: [
            "CREATE_INSTANT_INVITE",
            "KICK_MEMBERS",
            "BAN_MEMBERS",
            "MANAGE_CHANNELS",
            "MANAGE_GUILD",
            "ADD_REACTIONS",
            "VIEW_AUDIT_LOG",
            "PRIORITY_SPEAKER",
            "STREAM",
            "VIEW_CHANNEL",
            "SEND_MESSAGES",
            "SEND_TTS_MESSAGES",
            "MANAGE_MESSAGES",
            "EMBED_LINKS",
            "ATTACH_FILES",
            "READ_MESSAGE_HISTORY",
            "MENTION_EVERYONE",
            "USE_EXTERNAL_EMOJIS",
            "VIEW_GUILD_INSIGHTS",
            "CONNECT",
            "SPEAK",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MOVE_MEMBERS",
            "USE_VAD",
            "CHANGE_NICKNAME",
            "MANAGE_NICKNAMES",
            "MANAGE_ROLES",
            "MANAGE_WEBHOOKS",
            "MANAGE_EMOJIS"
        ]
    },
    execute: function (msg, args, client) {
        var _this = this;
        execute: (function (msg, args, p, data, client) { return __awaiter(_this, void 0, void 0, function () {
            var member, user, string;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getmember(args[0], msg.guild.members)];
                    case 1:
                        member = _a.sent();
                        if (member == undefined)
                            return [2 /*return*/, msg.channel.send("I couldn't find that user")];
                        user = member.user;
                        string = args.slice(1).join(" ");
                        if ((string == undefined) || (string.length < 1))
                            return [2 /*return*/, msg.channel.send("I couldnt find your message!")];
                        msg.delete().catch(function (e) { return console.log(e); });
                        if (data[msg.guild.id].channels[msg.channel.id] == undefined || data[msg.guild.id].channels[msg.channel.id][user.id] == undefined) {
                            msg.channel.createWebhook(user.username, user.defaultAvatarURL({ format: "png" }))
                                .then(function (wb) {
                                wb.send(string);
                                if (data[msg.guild.id].channels[msg.channel.id] == undefined)
                                    data[msg.guild.id].channels[msg.channel.id] = {};
                                data[msg.guild.id].channels[msg.channel.id][user.id] = {};
                                data[msg.guild.id].channels[msg.channel.id][user.id].id = wb.id;
                                data[msg.guild.id].channels[msg.channel.id][user.id].token = wb.token;
                                update(data);
                            })
                                .catch(function (error) {
                                if (error.name === "DiscordAPIError") {
                                    msg.channel.fetchWebhooks().then(function (hooks) {
                                        var coll = hooks.filter(function (h) { return h.owner.id == client.user.id; });
                                        coll.deleteAll();
                                        data[msg.guild.id].channels[msg.channel.id] = {};
                                    });
                                    msg.channel.createWebhook(user.username, user.avatarURL)
                                        .then(function (webhk) {
                                        webhk.send(string);
                                        if (data[msg.guild.id].channels[msg.channel.id] == undefined)
                                            data[msg.guild.id].channels[msg.channel.id] = {};
                                        data[msg.guild.id].channels[msg.channel.id][user.id] = {};
                                        data[msg.guild.id].channels[msg.channel.id][user.id].id = webhk.id;
                                        data[msg.guild.id].channels[msg.channel.id][user.id].token = webhk.token;
                                        update(data);
                                    })
                                        .catch(function (error) {
                                        console.log("should have just deleted all the webhooks in this channel");
                                        console.log(error);
                                    });
                                }
                            });
                        }
                        else {
                            console.log(data[msg.guild.id].channels);
                            client.fetchWebhook(data[msg.guild.id].channels[msg.channel.id][user.id].id, data[msg.guild.id].channels[msg.channel.id][user.id].token)
                                .then(function (wb) {
                                if (wb == undefined) {
                                    msg.channel.createWebhook(user.username, user.avatarURL)
                                        .then(function (wb) {
                                        wb.send(string);
                                        if (data[msg.guild.id].channels[msg.channel.id] == undefined)
                                            data[msg.guild.id].channels[msg.channel.id] = {};
                                        data[msg.guild.id].channels[msg.channel.id][user.id] = {};
                                        data[msg.guild.id].channels[msg.channel.id][user.id].id = wb.id;
                                        data[msg.guild.id].channels[msg.channel.id][user.id].token = wb.token;
                                        update(data);
                                    })
                                        .catch(function (error) {
                                        console.error(error);
                                    });
                                }
                                else {
                                    wb.send(string);
                                }
                            })
                                .catch(function (error) { return console.log(error); });
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    }
};
