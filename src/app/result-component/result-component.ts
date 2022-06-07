import { Component, Input, OnInit } from '@angular/core';
import { user } from '../models/user.model';

@Component({
  selector: 'result-component',
  templateUrl: './result-component.html',
  styleUrls: ['./result-component.css'],
})
export class ResultComponent implements OnInit {
  @Input() users: user[];
  totalRecords: number;
  page: number = 1;

  ngOnInit() {
    console.log('muhsin-', this.users);
    this.totalRecords = this.users.length;
  }
}
