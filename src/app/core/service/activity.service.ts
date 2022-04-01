import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  search = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>('http://localhost:3000/nfts')
    .pipe(map((res: any)=> {
      return res;
    }))
  }

  // getAll(): Observable<IActivityTab[]> {
  //   return this.httpClient.get<IActivityTab[]>('http://localhost:3000/projects').pipe(
  //     tap((data) => data))
  // }
}
