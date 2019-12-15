import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BootstrapProj';

  constructor(private route:Router){}

  serverSideRoute() {
    this.route.navigate(['/home']);
  }
}
