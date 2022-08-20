import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto1';
  resultado = 0;
  numero(){
    this.resultado = Math.round(Math.random() * (10000 - 1) + 1)
  }
}
