import { Component } from '@angular/core';
import { WelcomeMessageComponent } from '../welcome-message/welcome-message.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeMessageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
