import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcityComponent } from './ucity.component';

describe('UcityComponent', () => {
  let component: UcityComponent;
  let fixture: ComponentFixture<UcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
