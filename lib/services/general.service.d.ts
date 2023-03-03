import Kadick from "..";
import { MyAccountResponse, MyInfoResponse } from "../models/types/MyAccountResponse.t";
import { OrderRequest } from "../models/types/OrderRequest.t";
import { TransactionResponse } from "../models/types/TransactionResponse.t";
export default class AirtimeService {
    #private;
    constructor(kadick: Kadick, username: string, password: string);
    getAccount(request: Pick<OrderRequest, 'countryId' | 'count' | 'date'>): Promise<MyAccountResponse | null>;
    getInfo(request: Pick<OrderRequest, 'countryId' | 'count' | 'date'>): Promise<MyInfoResponse | null>;
    getTransactions(request: Pick<OrderRequest, 'countryId' | 'count' | 'date'>, type: 'transaction' | 'allTransaction'): Promise<TransactionResponse | null>;
    checkTransaction(countryId: number, transLogId: number): Promise<Omit<TransactionResponse, 'transactions'> | null>;
    getTransactionCount(countryId: string, fromDate: Date, toDate: Date): Promise<any>;
}
