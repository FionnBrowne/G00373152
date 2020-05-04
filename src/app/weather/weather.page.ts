import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../Service/weather.service';
import { Capability } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  Weather:any=[];
  Current:any=[];
  lat;
    lon;
    constructor(private weatherService:WeatherService,public router: Router) { }

    ngOnInit(){
    
      this.getLocation();
   
    }
    goHome(){
      this.router.navigateByUrl('/home');
    }
    getLocation(){
      //using navigator to get device location to use in getweatherdatabycord method to have output initally of your location
      if("geolocation" in navigator){
        navigator.geolocation.watchPosition((success)=>{
          this.lat = success.coords.latitude;
          this.lon = success.coords.longitude;
  
          this.weatherService.getWeatherDataByCord(this.lat, this.lon).subscribe(data=>{
            this.Weather = data.location;
            this.Current = data.current;
          });
  
        })
      }
    }
  
    //if the user declines the navigator then they can enter a location, it passes the string into the method and shows the areas weather
    getCity(city){
      this.weatherService.getWeatherDataByCity(city).subscribe(
        (data)=>{
          this.Weather = data.location;
          this.Current = data.current;
        }
      );
      
    }
  
    goExtra(){
      this.router.navigateByUrl('/extra-weather');
    }
}


    