import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesNgClassComponent } from './directives-ng-class.component';

describe('DirectivesNgClassComponent', () => {
  let component: DirectivesNgClassComponent;
  let fixture: ComponentFixture<DirectivesNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesNgClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
