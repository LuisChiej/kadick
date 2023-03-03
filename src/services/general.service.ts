import Kadick from "..";
import { MyAccountResponse, MyInfoResponse } from "../models/types/MyAccountResponse.t";
import { OrderRequest } from "../models/types/OrderRequest.t";
import { TransactionResponse } from "../models/types/TransactionResponse.t";
import base64 from "../utils/base64";
import getSignature from "../utils/getSignature";

export default class AirtimeService {
    #kadick: Kadick;
    #username: string;
    #password: string;
    
    constructor(kadick: Kadick, username: string, password: string) {
        this.#kadick = kadick;
        this.#username = username;
        this.#password = password;
    }

    async getAccount(request: Pick<OrderRequest, 'countryId' | 'count' | 'date'>): Promise<MyAccountResponse | null> {
        const key = base64(this.#password, this.#username)
        const url = 'myaccount';

        try {
            const response = await this.#kadick.axios.post(
                url, {
                    ...request,
                    key1: key,
                    signature: getSignature()
                }
            )
    
            if(response.status === 200) return response.data;
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async getInfo(request: Pick<OrderRequest, 'countryId' | 'count' | 'date'>): Promise<MyInfoResponse | null> {
        const key = base64(this.#password, this.#username)
        const url = 'myinfo';

        try {
            const response = await this.#kadick.axios.post(
                url, {
                    ...request,
                    key1: key,
                    signature: getSignature()
                }
            )
    
            if(response.status === 200) return response.data;
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async getTransactions(
        request: Pick<OrderRequest, 'countryId' | 'count' | 'date'>,
        type: 'transaction' | 'allTransaction'
    ): Promise<TransactionResponse | null> {
        const key = base64(this.#password, this.#username)
        const url = type === 'transaction' ? 'mytransaction' : 'myalltransaction';

        try {
            const response = await this.#kadick.axios.post(
                url, {
                    ...request,
                    key1: key,
                    signature: getSignature()
                }
            )
    
            if(response.status === 200) return response.data;
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async checkTransaction(countryId: number, transLogId: number): Promise<Omit<TransactionResponse, 'transactions'> | null> {
        const key = base64(this.#password, this.#username)
        const url = 'transactioncheck';

        try {
            const response = await this.#kadick.axios.post(
                url, {
                    countryId,
                    transLogId,
                    key1: key,
                    signature: getSignature()
                }
            )
    
            if(response.status === 200) return response.data;
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async getTransactionCount(countryId: string, fromDate: Date, toDate: Date) {
        const key = base64(this.#password, this.#username)
        const url = 'transactioncount';

        try {
            const response = await this.#kadick.axios.post(
                url, {
                    countryId,
                    fromDate: fromDate.toISOString().split('T')[0],
                    toDate: toDate.toISOString().split('T')[0],
                    key1: key,
                    signature: getSignature()
                }
            )
    
            if(response.status === 200) return response.data;
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
}