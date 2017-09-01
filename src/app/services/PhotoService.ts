import {Injectable} from '@angular/core';
import {Photo} from '../models/Photo';
import {Http} from '@angular/http';
import {BaseService} from './BaseService';
import {Album} from '../models/Album';

@Injectable()
export class PhotoService extends BaseService<Photo> {
  constructor(http: Http) {
    super(http, '/photos');
  }

  getUrlByAlbum(album: Album): string {
    return this.getUrl() + '/' + album.id;
  }

  getByAlbum(album: Album): Promise<Photo[]> {
    return this.http.get(this.getUrlByAlbum(album)).toPromise().then(response => this.parseCollection(response))
      .catch(this.handleError);
  }

}
