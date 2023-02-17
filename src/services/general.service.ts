import Kadick from "..";
import { MyAccountResponse, MyInfoResponse } from "../models/types/MyAccountResponse.t";
import { OrderRequest } from "../models/types/OrderRequest.t";
import { TransactionResponse } from "../models/types/TransactionResponse.t";
import getSignature from "../utils/getSignature";

export default class AirtimeService {
    #kadick: Kadick;
    #key: string;
    
    constructor(kadick: Kadick, key: string) {
        this.#kadick = kadick;
        this.#key = key;
    }

    async getAccount(request: Pick<OrderRequest, 'countryId' | 'count' | 'date'>): Promise<MyAccountResponse | null> {
        const url = 'myaccount';

        try {
            const response = await this.#kadick.axios.post(
                url, {
                    ...request,
                    key1: this.#key,
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
        const url = 'myinfo';

        try {
            const response = await this.#kadick.axios.post(
                url, {
                    ...request,
                    key1: this.#key,
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
        const url = type === 'transaction' ? 'mytransaction' : 'myalltransaction';

        try {
            const response = await this.#kadick.axios.post(
                url, {
                    ...request,
                    key1: this.#key,
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
        const url = 'transactioncheck';

        try {
            const response = await this.#kadick.axios.post(
                url, {
                    countryId,
                    transLogId,
                    key1: this.#key,
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
        const url = 'transactioncount';

        try {
            const response = await this.#kadick.axios.post(
                url, {
                    countryId,
                    fromDate: fromDate.toISOString().split('T')[0],
                    toDate: toDate.toISOString().split('T')[0],
                    key1: this.#key,
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