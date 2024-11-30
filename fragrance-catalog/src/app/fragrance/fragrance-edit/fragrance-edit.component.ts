import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Fragrance } from '../../types/fragrance';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-fragrance-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fragrance-edit.component.html',
  styleUrl: './fragrance-edit.component.css',
})
export class FragranceEditComponent {
  @ViewChild('editForm') editForm: NgForm | undefined;
  fragrance = {} as Fragrance;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const fragranceId = this.route.snapshot.params['fragranceId'];

    this.apiService
      .getSingleFragrance(fragranceId)
      .subscribe((fragranceFromDb) => {
        this.fragrance = fragranceFromDb;
        const scents = this.fragrance.scents as string[];

        this.editForm?.form.controls['name'].setValue(this.fragrance.name);
        this.editForm?.form.controls['imageUrl'].setValue(
          this.fragrance.imageUrl
        );
        this.editForm?.form.controls['description'].setValue(
          this.fragrance.description
        );
        this.editForm?.form.controls['scents'].setValue(scents.join(' '));
      });
  }

  edit() {
    const { name, imageUrl, description, scents } = this.editForm?.value;
    const scentsAsArr = scents.split(' ');
    const id = this.fragrance._id;

    this.apiService.editFragrance(id, name, imageUrl, description, scentsAsArr).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/fragrances'])
    });
  }
}
