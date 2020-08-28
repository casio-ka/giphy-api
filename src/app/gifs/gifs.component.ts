import { Subscription } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy {
  gifs: any[] = [];
  subscription: Subscription;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs();
    this.dataService.getGifs()
    this.subscription = this.dataService.getGifs()
      .subscribe((response: any)=>{
        this.gifs = response

      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  }

