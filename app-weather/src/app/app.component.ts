import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app-weather';

  temperatures: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log('ngOnInit ')
    this.apiService.getTemperature().subscribe((data)=>{
      this.temperatures = data;
      console.log('temperatures ' + JSON.stringify(data))
    });
  }
}
