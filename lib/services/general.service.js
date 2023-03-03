"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base64_1 = __importDefault(require("../utils/base64"));
const getSignature_1 = __importDefault(require("../utils/getSignature"));
class AirtimeService {
    #kadick;
    #username;
    #password;
    constructor(kadick, username, password) {
        this.#kadick = kadick;
        this.#username = username;
        this.#password = password;
    }
    async getAccount(request) {
        const key = (0, base64_1.default)(this.#password, this.#username);
        const url = 'myaccount';
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
    async getInfo(request) {
        const key = (0, base64_1.default)(this.#password, this.#username);
        const url = 'myinfo';
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
    async getTransactions(request, type) {
        const key = (0, base64_1.default)(this.#password, this.#username);
        const url = type === 'transaction' ? 'mytransaction' : 'myalltransaction';
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
    async checkTransaction(countryId, transLogId) {
        const key = (0, base64_1.default)(this.#password, this.#username);
        const url = 'transactioncheck';
        try {
            const response = await this.#kadick.axios.post(url, {
                countryId,
                transLogId,
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
    async getTransactionCount(countryId, fromDate, toDate) {
        const key = (0, base64_1.default)(this.#password, this.#username);
        const url = 'transactioncount';
        try {
            const response = await this.#kadick.axios.post(url, {
                countryId,
                fromDate: fromDate.toISOString().split('T')[0],
                toDate: toDate.toISOString().split('T')[0],
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
exports.default = AirtimeService;
