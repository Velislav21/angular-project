import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorNotifService } from './error-notif.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error-notif',
  standalone: true,
  imports: [],
  templateUrl: './error-notif.component.html',
  styleUrl: './error-notif.component.css'
})
export class ErrorNotifComponent implements OnInit, OnDestroy {
  msg: string | null | undefined = ''

  errorSubscription: Subscription | null = null;
  constructor(private errNotifService: ErrorNotifService){};

  ngOnInit(): void {
    
    this.errorSubscription = this.errNotifService.apiErrorMessage$.subscribe((err: any) => {
      console.log(err)
      this.msg = err
    })
  }
  ngOnDestroy(): void {
    this.errorSubscription?.unsubscribe();
  }
}
