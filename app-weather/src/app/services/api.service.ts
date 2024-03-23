import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Temperature } from '../models/temperature.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl : string ="http://localhost:5038/";

  constructor(private httpClient: HttpClient) { }

  public getTemperature(): Observable<Temperature[]>{
    return this.httpClient.get<Temperature[]>(this.apiUrl + "WeatherForecast");
  }
}
