import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataAccessService } from './data-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  private sub: Subscription;
  private jsonData = [];
  private rowClicked: boolean = false;
  private clickedUser: any;

  constructor(private dataAccessService: DataAccessService){}
  
  ngOnInit(){
    this.sub = this.dataAccessService.getData().subscribe((data: []) => {
      console.log(data);
      this.jsonData = data;
    });
  }

  onClick(data: any){
    this.rowClicked = true;
    console.log(data);
    this.clickedUser = data;
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
