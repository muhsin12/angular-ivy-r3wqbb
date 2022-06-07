import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user, UserDetails } from '../models/user.model';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  getUsers(login) {
    let userUrl = `https://api.github.com/search/users?q=${login}`;
    return this.http.get<UserDetails>(userUrl);
  }
}
