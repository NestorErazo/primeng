import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEjemplo1Component } from './signal-ejemplo1.component';

describe('SignalEjemplo1Component', () => {
  let component: SignalEjemplo1Component;
  let fixture: ComponentFixture<SignalEjemplo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEjemplo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalEjemplo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
