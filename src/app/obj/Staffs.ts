import { Roles } from './Roles';

export interface Staffs {
  idStaff: string;
  code: string;
  nameStaff: string;
  permanentAddress: string;
  phoneNumber: string;
  bithday: Date;
  username: string;
  passwd: string;
  statusStaff: number;
  roles: [];
}
