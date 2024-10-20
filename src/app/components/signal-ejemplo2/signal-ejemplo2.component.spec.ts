import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEjemplo2Component } from './signal-ejemplo2.component';

describe('SignalEjemplo2Component', () => {
  let component: SignalEjemplo2Component;
  let fixture: ComponentFixture<SignalEjemplo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEjemplo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalEjemplo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
