import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturePayementComponent } from './facture-payement.component';

describe('FacturePayementComponent', () => {
  let component: FacturePayementComponent;
  let fixture: ComponentFixture<FacturePayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturePayementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturePayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
