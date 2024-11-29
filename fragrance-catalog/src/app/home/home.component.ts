import { Component } from '@angular/core';
import { WelcomeMessageComponent } from '../welcome-message/welcome-message.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeMessageComponent, RouterLink], //! TODO add catalog redirect..
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
