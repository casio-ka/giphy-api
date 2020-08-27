import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private DataService: DataService) { }

  ngOnInit(): void {
  }
  search(searchTerm: string) {
    if(searchTerm !== '')
    this.dataService.searchGifs(searchTerm);

  }
}
