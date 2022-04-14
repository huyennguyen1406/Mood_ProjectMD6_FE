import {Role} from './Role';

export interface Users {

  id?: number;
  name?: string;
  address?: string;
  phone?: string;
  avatarUrl?: string;
  email?: string;
  username?: string;
  password?: string;
  role?: Role[];

}
