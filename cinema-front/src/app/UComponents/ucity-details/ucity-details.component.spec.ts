import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcityDetailsComponent } from './ucity-details.component';

describe('UcityDetailsComponent', () => {
  let component: UcityDetailsComponent;
  let fixture: ComponentFixture<UcityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcityDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
