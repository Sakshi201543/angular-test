import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class DataAccessService{
  private i: number = 1;
  constructor(private http: HttpClient ){}

  getData(){
    return timer(0, 1000)
             .pipe(
               switchMap(_ => this.http.get('https://jsonplaceholder.typicode.com/users?_page='+this.i++)
               ),
               catchError(error => "Bad Error"+error)
              );
  }
}