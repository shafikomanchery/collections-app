import { Status } from "./status.enum";

export interface Account {
    id: number;
    entityId: number;
    name: string;
    startDate: string;
    endDate: string;
    dueOn: number;
    createdDate: string;
    updatedDate: string;
    defaultAmount: number;
    status: Status;
}