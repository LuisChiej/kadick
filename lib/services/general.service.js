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
    async getAccount(request) {
        const url = 'myaccount';
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
    async getInfo(request) {
        const url = 'myinfo';
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
    async getTransactions(request, type) {
        const url = type === 'transaction' ? 'mytransaction' : 'myalltransaction';
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
    async checkTransaction(countryId, transLogId) {
        const url = 'transactioncheck';
        try {
            const response = await this.#kadick.axios.post(url, {
                countryId,
                transLogId,
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
    async getTransactionCount(countryId, fromDate, toDate) {
        const url = 'transactioncount';
        try {
            const response = await this.#kadick.axios.post(url, {
                countryId,
                fromDate: fromDate.toISOString().split('T')[0],
                toDate: toDate.toISOString().split('T')[0],
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
