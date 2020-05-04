import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { } //the method i used to pull in the api using the http client
  getLatestNewsStories():Observable<any>{
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&apiKey=3116de034f9c46648ee2ccbf7d052ecc');
  }
}



