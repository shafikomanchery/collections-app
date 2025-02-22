import { Status } from "./status.enum";

export interface Entity {
    id: number;
    name: string;
    tagline: string;
    logo: string;
    registrationNo: string;
    address: string;
    email: string;
    phone: number;
    mobile: number;
    createdDate: string;
    updatedDate: string;
    status: Status;
}
