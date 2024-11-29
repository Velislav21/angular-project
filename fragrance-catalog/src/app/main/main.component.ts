import { Component } from '@angular/core';
import { WelcomeMessageComponent } from '../welcome-message/welcome-message.component';
import { FragranceListComponent } from '../fragrance/fragrance-list/fragrance-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FragranceListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
