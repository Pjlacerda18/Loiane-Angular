import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplesPipesComponent } from './exemples-pipes.component';

describe('ExemplesPipesComponent', () => {
  let component: ExemplesPipesComponent;
  let fixture: ComponentFixture<ExemplesPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplesPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplesPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
