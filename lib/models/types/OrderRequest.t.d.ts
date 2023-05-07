export type OrderRequest = {
    countryId: number;
    operatorId?: "1" | "2" | "3" | "6";
    operatorCode?: "MTN" | "ATL" | "GLO" | "9M";
    operatorPlanId?: string;
    mobileNumber?: string;
    reMobileNumber?: string;
    dnValue?: string;
    dnCode?: string;
    amount?: string;
    total?: string;
    key1: string;
    signature: number;
    transLogId?: number;
    date?: string;
    count?: number;
    fromDate?: string;
    toDate?: string;
};
