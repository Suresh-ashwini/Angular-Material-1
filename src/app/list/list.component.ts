import { Component, OnInit } from '@angular/core';

export interface ListUsers {
  firstName: string;
  lastName: string;
  gender: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: ListUsers[] = [
  {
    firstName: 'Ashwini',
    lastName: 'Suresh',
    gender: 'Female'
  },
  {
    firstName: 'Divya',
    lastName: 'Sathish',
    gender: 'Female'
  },
  {
    firstName: 'Abhijit',
    lastName: 'Rajshekar',
    gender: 'Male'
  },
  {
    firstName: 'Aurica',
    lastName: 'Suresh',
    gender: 'female'
  },
  {
    firstName: 'Harsha',
    lastName: 'Kodsala',
    gender: 'Male'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
