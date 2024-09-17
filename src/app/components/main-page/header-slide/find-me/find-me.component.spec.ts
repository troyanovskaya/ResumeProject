import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMeComponent } from './find-me.component';

describe('FindMeComponent', () => {
  let component: FindMeComponent;
  let fixture: ComponentFixture<FindMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindMeComponent]
    });
    fixture = TestBed.createComponent(FindMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
