import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Building {
  name: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public formGender: string;
  public gender: string[] = ['Male', 'Female'];
  myControl = new FormControl();
  options: Building[] = [
    {name: 'Roush'},
    {name: 'CCD'},
    {name: 'Pasta'},
    {name: 'SVC'},
    {name: 'Main Building'}
  ];
  filteredOptions: Observable<Building[]>;

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'm';
    }

    return value;
  }
  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.options.slice())
    );
  }

  displayFn(user?: Building): string | undefined {
    return user ? user.name : undefined;
  }
  private _filter(name: string): Building[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
