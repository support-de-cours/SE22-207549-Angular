import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public counter: number = 0;

  public less() {
    if (this.counter <= -10) return;
    this.counter--;
  }
  public more() {
    if (this.counter >= 10) return;
    this.counter++;
    // if (this.counter < 10 ) this.counter++;
  }
}
