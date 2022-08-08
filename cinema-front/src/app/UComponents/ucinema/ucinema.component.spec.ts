import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UCinemaComponent } from './ucinema.component';

describe('UCinemaComponent', () => {
  let component: UCinemaComponent;
  let fixture: ComponentFixture<UCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UCinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
