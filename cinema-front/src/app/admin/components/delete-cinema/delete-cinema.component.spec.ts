import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCinemaComponent } from './delete-cinema.component';

describe('DeleteCinemaComponent', () => {
  let component: DeleteCinemaComponent;
  let fixture: ComponentFixture<DeleteCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
