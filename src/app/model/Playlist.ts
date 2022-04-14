import {Song} from './Song';
import {Users} from './Users';

export interface Playlist {

  idPlaylist?: number;
  namePlaylist?: string;
  user?: Users;
  avatarPlaylistUrl?: string;
  descriptionPlaylist?: string;
  dateCreatePlaylist?: string;
  lastModifierPlaylist?: string;
  numberOfViewPlaylist?: number;
  songs?: Song[];

}
