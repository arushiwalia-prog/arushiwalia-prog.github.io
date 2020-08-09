import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'work2';
  loadedFeature: string;
  onNavigate(feature: string) {
    this.loadedFeature = feature;
    console.log(this.loadedFeature);
  }
}
