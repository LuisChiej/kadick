"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const airtime_service_1 = __importDefault(require("./services/airtime.service"));
const databundle_service_1 = __importDefault(require("./services/databundle.service"));
class Kadick {
    _username;
    _password;
    _axios;
    airtime;
    dataBundle;
    constructor(username, password) {
        this._username = username;
        this._password = password;
        const instance = axios_1.default.create({
            baseURL: 'https://b2b.kadicktopup.com/api'
        });
        instance.defaults.headers.post['Content-Type'] = 'application/json';
        instance.defaults.headers.common['Accept'] = 'application/json';
        this._axios = instance;
        this.airtime = new airtime_service_1.default(this, this._username, this._password);
        this.dataBundle = new databundle_service_1.default(this, this._username, this._password);
    }
    get axios() {
        return this._axios;
    }
}
exports.default = Kadick;
