import { Component, Input } from '@angular/core';
import { Fragrance } from '../../types/fragrance';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fragrance-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fragrance-post.component.html',
  styleUrl: './fragrance-post.component.css',
})
export class FragrancePostComponent {
  @Input() fragrance: Fragrance = {
    owner: '',
    _id: '',
    name: '',
    imageUrl: '',
    description: '',
    scents: '',
    likedList: [],
  };
}
