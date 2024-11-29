import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fragrance',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-fragrance.component.html',
  styleUrl: './add-fragrance.component.css',
})
export class AddFragranceComponent {
  @ViewChild('createForm') createForm: NgForm | undefined;

  constructor(private apiService: ApiService, private router: Router) {}

  create() {
    const { name, imageUrl, description, scents} = this.createForm?.form.value;

    const scentsAsArr = scents.split(' ');
    this.apiService.create(name, imageUrl, description, scentsAsArr).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/fragrances'])
    })
  }
}
