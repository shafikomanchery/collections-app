import { Gender } from "./gender.enum";
import { Status } from "./status.enum";
import { UserRole } from "./user-role.enum";

export interface User {
  id: number;
  username: string;
  password: string;
  emailAddress: string;
  createdDate: string;
  updatedDate: string;
  status: Status;
}

export interface UserProfile extends User {
  id: number;
  userId: number;
  registerno: string;
  firstname: string;
  lastname: string;
  gender: Gender,
  homeaddress: string;
  phone: number;
  mobile: number;
  photo: string;
  createdDate: string;
  updatedDate: string;
  status: Status;
}

export interface UserAccountRole{
  id: number;
  userId: number;
  accountId: number;
  userRole: UserRole;
  status: Status;
}

export interface UserAccount {
  id: string;
  userId: number;
  accountId: number;
  startDate: string;
  endDate: string;
  dueOn: string;
  amount: number;
  createdDate: string;
  updatedDate: string;
  status: Status;
}
