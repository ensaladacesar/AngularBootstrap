import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  testData(data){
    return this.http.post(
      `http://localhost:3000/script`,
      data
    );
  }
}
