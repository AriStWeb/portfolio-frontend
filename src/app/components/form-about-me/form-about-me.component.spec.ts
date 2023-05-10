import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAboutMeComponent } from './form-about-me.component';

describe('FormAboutMeComponent', () => {
  let component: FormAboutMeComponent;
  let fixture: ComponentFixture<FormAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
