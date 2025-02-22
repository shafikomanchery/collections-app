export interface Payment {
    id: number;
    userId: number;
    accountId: number;
    amount: number;
    paymentDate: string;
    paymentType: PaymentType;
    transactionId: string;
    dueDate: string;
    remarks: string;
    status: PaymentStatus;
}

export enum PaymentStatus{
    PAID='PAID',
    UNPAID='UNPAID',
}

export enum PaymentType{
    CASH='CASH',
    ONLINE='ONLINE'
}