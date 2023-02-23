"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getSignature_1 = __importDefault(require("../utils/getSignature"));
class AirtimeService {
    #kadick;
    #key;
    constructor(kadick, key) {
        this.#kadick = kadick;
        this.#key = key;
    }
    async buy(request) {
        const url = request.operatorCode === '9M' ? '9mflexisale' : 'flexisale';
        try {
            const response = await this.#kadick.axios.post(url, {
                ...request,
                key1: this.#key,
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
exports.default = AirtimeService;
