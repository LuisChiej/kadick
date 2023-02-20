declare type MyResponse = {
    code?: string;
    agentCode?: string;
    name?: string;
    errorCode: number;
    errorDescription: string;
};
export declare type MyAccountResponse = MyResponse & {
    username: string;
    avaialbleCredit: string;
    lastTxAmount: string;
    lastTxNo: string;
    lastTxDate: string;
};
export declare type MyInfoResponse = MyResponse & {
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    mobileNo: string;
    email: string;
};
export {};
