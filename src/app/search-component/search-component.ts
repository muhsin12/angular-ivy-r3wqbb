import { Component } from '@angular/core';
import { SearchService } from '../services/search-service';
import { UserDetails, user } from '../models/user.model';
@Component({
  selector: 'search-component',
  templateUrl: './search-component.html',
  styleUrls: ['./search-component.css'],
})
export class SearchComponent {
  constructor(private searchService: SearchService) {}
  login: string;
  users: user[];

  getUserDetails() {
    if (this.login === '' || this.login === undefined) {
      alert('Please enter any input');
    } else {
      this.searchService.getUsers(this.login).subscribe((data) => {
        console.log(data.items);
        this.users = data.items;
      });
    }
  }
}
