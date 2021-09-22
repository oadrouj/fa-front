import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-validate-mail',
  templateUrl: './validate-mail.component.html'
})
export class ValidateMailComponent implements OnInit {

  userId: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { 
  }

  ngOnInit(): void { 
    this.userId = Number(this._activatedRoute.snapshot.paramMap.get('userId'));
    this._router.navigate(['/account/redirect'], { state: { route: '/account/reister', step: '3', userId: this.userId } });
  }
}
