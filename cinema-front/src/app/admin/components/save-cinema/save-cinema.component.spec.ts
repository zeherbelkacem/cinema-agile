import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCinemaComponent } from './save-cinema.component';

describe('SaveCinemaComponent', () => {
  let component: SaveCinemaComponent;
  let fixture: ComponentFixture<SaveCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveCinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
