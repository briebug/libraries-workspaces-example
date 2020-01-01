import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h2>Web Admin</h2>
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
