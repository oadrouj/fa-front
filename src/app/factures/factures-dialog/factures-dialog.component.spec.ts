import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesDialogComponent } from './factures-dialog.component';

describe('FacturesDialogComponent', () => {
  let component: FacturesDialogComponent;
  let fixture: ComponentFixture<FacturesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
