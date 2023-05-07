"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base64_1 = __importDefault(require("../utils/base64"));
const getSignature_1 = __importDefault(require("../utils/getSignature"));
class DataBundleService {
    #kadick;
    #username;
    #password;
    constructor(kadick, username, password) {
        this.#kadick = kadick;
        this.#username = username;
        this.#password = password;
    }
    async buy(request) {
        const key = (0, base64_1.default)(this.#password, this.#username);
        const url = request.operatorCode === '9M' ? '9mflexisale' : 'flexisale';
        try {
            const response = await this.#kadick.axios.post(url, {
                ...request,
                key1: key,
                signature: (0, getSignature_1.default)()
            });
            if (response.status === 200)
                return response.data;
            return null;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
}
exports.default = DataBundleService;
