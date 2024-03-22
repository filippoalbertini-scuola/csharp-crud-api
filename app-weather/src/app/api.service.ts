import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl : string ="http://localhost:5038/";

  constructor(private httpClient: HttpClient) { }

  public getTemperature(){
    return this.httpClient.get<any>(this.apiUrl + "WeatherForecast");
  }
}
