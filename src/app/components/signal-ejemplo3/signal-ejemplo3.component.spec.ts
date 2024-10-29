import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEjemplo3Component } from './signal-ejemplo3.component';

describe('SignalEjemplo3Component', () => {
  let component: SignalEjemplo3Component;
  let fixture: ComponentFixture<SignalEjemplo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEjemplo3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalEjemplo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
