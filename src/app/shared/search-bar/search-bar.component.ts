import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {

  type = ''
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.type = form.value.search;
  }

}
