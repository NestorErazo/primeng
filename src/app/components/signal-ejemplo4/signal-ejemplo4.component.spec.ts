import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEjemplo4Component } from './signal-ejemplo4.component';

describe('SignalEjemplo4Component', () => {
  let component: SignalEjemplo4Component;
  let fixture: ComponentFixture<SignalEjemplo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEjemplo4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalEjemplo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
