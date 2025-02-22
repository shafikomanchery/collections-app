import { Status } from "./status.enum";

export interface EntityBankAccount {
    id: number;
    entityId: number;
    accountHolderName: string;
    accountNo: string;
    bank: string;
    branch: string;
    ifscCode: string;
    status: Status;
}