import {Users} from './Users';
import {Playlist} from './Playlist';

export interface LikePlaylist {
  idLikePlaylist?: number;
  // status?: boolean;
  userLikeSong?: Users;
  playlistLikeSong?: Playlist;
}
