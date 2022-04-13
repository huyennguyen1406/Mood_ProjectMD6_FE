import {Users} from './Users';
import {Song} from './Song';

export interface LikeSong {
  idLikeSong?: number;
  // status?: boolean;
  userLikeSong?: Users;
  songLikeSong?: Song;
}
