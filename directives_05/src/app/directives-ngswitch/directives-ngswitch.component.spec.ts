import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesNgswitchComponent } from './directives-ngswitch.component';

describe('DirectivesNgswitchComponent', () => {
  let component: DirectivesNgswitchComponent;
  let fixture: ComponentFixture<DirectivesNgswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesNgswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
