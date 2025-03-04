import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {NavBarComponent} from '../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = signal('Hello There!')

  changeTitle() {
    // this.title.set("General Kenobi")
    this.title.update((old) => old.replace("!", ""))
  }
}
