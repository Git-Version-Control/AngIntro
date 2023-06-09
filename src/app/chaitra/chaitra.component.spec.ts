import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaitraComponent } from './chaitra.component';

describe('ChaitraComponent', () => {
  let component: ChaitraComponent;
  let fixture: ComponentFixture<ChaitraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChaitraComponent]
    });
    fixture = TestBed.createComponent(ChaitraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
