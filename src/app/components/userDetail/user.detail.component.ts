import {Component, Input} from '@angular/core';
import {User} from '../../models/User';
import {Album} from '../../models/Album';
import {AlbumService} from '../../services/AlbumService';

@Component({
  selector: 'userDetail',
  templateUrl: './user.detail.component.html',
  styleUrls: ['./user.detail.component.css']
})
export class UserDetailComponent {
  @Input() user: User;
  albums: Album[];

  constructor(private albumService: AlbumService) {
  }

  private setAlbums(albums: Album[]): void {
    this.albums = albums;
  }

  getAlbums(): void {
    const albumPromise = this.albumService.getByUser(this.user);
    albumPromise.then(albums => this.setAlbums(albums));
  }

  ngOnInit(): void {
    this.getAlbums();
  }
}
