import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWorksComponent } from './form-works.component';

describe('FormWorksComponent', () => {
  let component: FormWorksComponent;
  let fixture: ComponentFixture<FormWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
