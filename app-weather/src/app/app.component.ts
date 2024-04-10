import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ListTemperaturesComponent } from './components/list-temperatures/list-temperatures.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ListTemperaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  annoscolastico = "AS 23/24";
  classemateria = "5G INF 2.3";
  data = "27/03/2024";
  autore="Prof.";
  titolo = "Elenco temperature da API";

  constructor() { }

  ngOnInit(){
  }
}
