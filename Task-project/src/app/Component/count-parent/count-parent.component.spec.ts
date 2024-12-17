import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountParentComponent } from './count-parent.component';

describe('CountParentComponent', () => {
  let component: CountParentComponent;
  let fixture: ComponentFixture<CountParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountParentComponent]
    });
    fixture = TestBed.createComponent(CountParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
