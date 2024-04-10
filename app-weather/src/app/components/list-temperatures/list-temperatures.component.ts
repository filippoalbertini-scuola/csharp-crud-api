import { Component, Input } from '@angular/core';
import { Temperature } from '../../models/temperature.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'list-temperatures',
  standalone: true,
  imports: [],
  template: `
    <div style="padding: 20px; background-color: white;">
      <ul style="width: 70%; margin: 10px 15% 10px 15%;">
          @for (item of temperatures; track $index) {
              <li>date {{item.date}} temperature {{item.temperatureC}} summary {{item.summary}}</li>
          }
      </ul>
    </div>
  `,
  styles: [
    `
      div {
        font-family: Verdana;
        border: 1px solid silver;
        border-radius: 6px;
        margin: 2px;
        padding: 1px;
        text-align: left;
      }
    `
  ]
})
export class ListTemperaturesComponent {
  temperatures: Temperature[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log('ngOnInit ')
    this.apiService.getTemperature().subscribe((data)=>{
      this.temperatures = data;
      console.log('temperatures ' + JSON.stringify(data))
    });
  }

}
