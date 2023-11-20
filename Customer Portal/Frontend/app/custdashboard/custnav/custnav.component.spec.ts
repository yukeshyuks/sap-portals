import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustnavComponent } from './custnav.component';

describe('CustnavComponent', () => {
  let component: CustnavComponent;
  let fixture: ComponentFixture<CustnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
