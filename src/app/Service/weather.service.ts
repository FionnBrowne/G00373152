import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'http://api.weatherapi.com/v1/current.json';
  apiKey = '5ae423ec6a8b48bab50155447200405';

  constructor(private httpClient:HttpClient) { }
  //method pull in the api using the http client
  GetWeather():Observable<any>{
    return this.httpClient.get('http://api.weatherapi.com/v1/current.json?key=5ae423ec6a8b48bab50155447200405=Galway');
}
//passing the latitude and longitude from the geolocator to the api link 
getWeatherDataByCord(lat, lon):Observable<any>{
  let params = new HttpParams()
  .set('q',(lat+' '+lon))
  .set('key', this.apiKey)

  return this.httpClient.get(this.url , {params});
}
getWeatherDataByCity(city: string):Observable<any>{
  let params = new HttpParams()
  .set('q' , city)
  .set('key', this.apiKey)
  return this.httpClient.get(this.url , {params});
}
}
