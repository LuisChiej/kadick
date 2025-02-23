export type OrderResponse = {
    errorCode: number;
    errorDescription: string;
    signature: number;
    transLogId: number;
    flexiMessage?: {
        status: "S" | "E" | "T" | "F" | "O" | "I";
        refno: string;
        mobileNumber: string;
        amount: string;
        statusLabel: string;
        seqNum: string;
        message: string;
        showMessage: boolean;
        operatorCode: string;
        oprPlan: string;
        dateLabel: string;
        transactionType: string;
    },
    dataPlans?: Array<{
        operator: string;
        operatorPlanId: number;
        planDescription: string;
        amount: string; // "5000.00"
        dnValue: string; // "5000.00",
        dnCode: string;
        planUpdatedTime: string;
        rateUpdateTime: string;
    }>
}