import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {HomeComponent} from
        "./pages/home/home.component";
import {HeaderComponent} from
      "./components/header/header.component";
import {NavbarComponent} from
      "./components/navbar/navbar.component";
import {FooterComponent} from
      "./components/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet,
      HeaderComponent,
      NavbarComponent,
      HomeComponent,
      FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Stable Diffusion Models';
}
