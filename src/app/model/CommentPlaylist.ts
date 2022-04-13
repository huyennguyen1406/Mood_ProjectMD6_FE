import {Users} from './Users';
import {Playlist} from './Playlist';

export interface CommentPlaylist {
  id?: number;
  content?: string;
  user?: Users;
  playlist?: Playlist;
}
