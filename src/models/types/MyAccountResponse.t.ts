type MyResponse = {
    code?: string;
    agentCode?: string;
    name?: string;
    errorCode: number;
    errorDescription: string;
}

export type MyAccountResponse = MyResponse & {
    username: string;
    availableCredit: string;
    lastTxAmount: string;
    lastTxNo: string;
    lastTxDate: string;
}

export type MyInfoResponse = MyResponse & {
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    mobileNo: string;
    email: string;
}