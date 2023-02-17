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
    }
}