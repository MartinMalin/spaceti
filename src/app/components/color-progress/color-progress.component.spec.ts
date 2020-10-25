import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorProgressComponent } from './color-progress.component';

describe('ColorProgressComponent', () => {
  let component: ColorProgressComponent;
  let fixture: ComponentFixture<ColorProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
