import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyloginComponent } from './dummylogin.component';

describe('DummyloginComponent', () => {
  let component: DummyloginComponent;
  let fixture: ComponentFixture<DummyloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
