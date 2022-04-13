import {Users} from './Users';
import {Song} from './Song';

export interface CommentSong {
  id?: number;
  content?: string;
  user?: Users;
  song?: Song;
}
