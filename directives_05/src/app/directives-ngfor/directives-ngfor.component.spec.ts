import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesNgforComponent } from './directives-ngfor.component';

describe('DirectivesNgforComponent', () => {
  let component: DirectivesNgforComponent;
  let fixture: ComponentFixture<DirectivesNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesNgforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
