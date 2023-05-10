import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuExpLabComponent } from './menu-exp-lab.component';

describe('MenuExpLabComponent', () => {
  let component: MenuExpLabComponent;
  let fixture: ComponentFixture<MenuExpLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuExpLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuExpLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
