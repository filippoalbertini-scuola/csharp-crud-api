import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  standalone: true,
  imports: [],
  template: `
    <div>
      {{ annoscolastico }} {{ classemateria }} {{ data }} <br />
      {{ autore }} <br />
      {{ titolo }}
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
        text-align: center;
      }
    `
  ]
})
export class HeaderComponent implements OnInit {
  @Input() annoscolastico: string = "";
  @Input() classemateria: string = "";
  @Input() data: string = "";
  @Input() autore: string = "";
  @Input() titolo: string = "";

  constructor() {}

  ngOnInit() {}
}
