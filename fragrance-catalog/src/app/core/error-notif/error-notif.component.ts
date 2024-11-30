import { Component, OnInit } from '@angular/core';
import { ErrorNotifService } from './error-notif.service';

@Component({
  selector: 'app-error-notif',
  standalone: true,
  imports: [],
  templateUrl: './error-notif.component.html',
  styleUrl: './error-notif.component.css'
})
export class ErrorNotifComponent implements OnInit {
  msg = ''
  constructor(private errNotifService: ErrorNotifService){};

  ngOnInit(): void {
    
    this.errNotifService.apiErrorMessage$.subscribe((err: any) => {
      this.msg = err?.message
    })

  }

}
