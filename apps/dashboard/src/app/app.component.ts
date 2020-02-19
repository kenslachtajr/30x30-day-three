import { Component } from '@angular/core';

@Component({
  selector: 'fruits-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fruits';

  links = [
    { path: './fruits', icon: 'work', title: 'Fruits' },
  ]
}
