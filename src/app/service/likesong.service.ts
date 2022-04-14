import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LikeSong} from '../model/LikeSong';
import {HttpService} from './http.service';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class LikesongService {

  constructor(private http: HttpClient,
              private httpService: HttpService) { }

  getAllLikesong(): Observable<any> {
    return this.http.get<any>(API_URL + '/likesong', this.httpService.getHttp());
  }

  getTotalLike(idSong: number): Observable<any> {
    return this.http.get<any>(API_URL + `/home/like/song/${idSong}`)
  }

  updateLikesong(likesong: LikeSong): Observable<any> {
    return this.http.post(API_URL + '/likesong', likesong, this.httpService.getHttp());
  }
}
