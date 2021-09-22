import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-end',
  templateUrl: './register-end.component.html',
  styleUrls: ['./register-end.component.css']
})
export class RegisterEndComponent implements OnInit {
  
  @Input()
  code: number;

  constructor(private _router: Router) { }

  ngOnInit(): void { 
  }

  redirect() {
    this._router.navigate(['/account/home']);
  }
}
