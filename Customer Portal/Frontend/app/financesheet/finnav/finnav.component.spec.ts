import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinnavComponent } from './finnav.component';

describe('FinnavComponent', () => {
  let component: FinnavComponent;
  let fixture: ComponentFixture<FinnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
