export declare type TransactionResponse = {
    date: string;
    count: number;
    errorCode: number;
    errorDescription: string;
    transactions?: Array<Transaction>;
    allTransactions?: Array<Transaction>;
};
export declare type TransactionCountResponse = {
    fromDate: string;
    toDate: string;
    count: number;
    errorCode: string;
    errorDescription: string;
};
declare type Transaction = {
    id: number;
    operatorCode: "MTN" | "ATL" | "GLO" | "9M";
    operatorPlanId: string;
    operatorPlan: string;
    destMsisdn: string;
    amount: string;
    referenceNo: string;
    dateTime: string;
    status: string;
    transLogId: number;
};
export {};
