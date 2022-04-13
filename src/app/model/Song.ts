import {Users} from './Users';
import {Singers} from './Singers';
import {Playlist} from './Playlist';
import {Author} from "./Author";
import {Category} from "./Category";
import {Tag} from "./Tag";

export interface Song {
  idSong?: number;
  nameSong?: string;
  descriptionSong?: string;
  mp3UrlSong?: string;
  avatarUrlSong?: string;
  author?: Author;
  user?: Users;

  category?:Category;
  numberOfViewSong?: number;
  dateCreateSong?: string;
  playlists?: Playlist[];
  tags?: Tag[];

}
