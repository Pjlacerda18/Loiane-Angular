import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesCostumComponent } from './directives-costum.component';

describe('DirectivesCostumComponent', () => {
  let component: DirectivesCostumComponent;
  let fixture: ComponentFixture<DirectivesCostumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesCostumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesCostumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
