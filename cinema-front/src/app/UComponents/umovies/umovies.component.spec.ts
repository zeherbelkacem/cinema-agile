import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmoviesComponent } from './umovies.component';

describe('UmoviesComponent', () => {
  let component: UmoviesComponent;
  let fixture: ComponentFixture<UmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
