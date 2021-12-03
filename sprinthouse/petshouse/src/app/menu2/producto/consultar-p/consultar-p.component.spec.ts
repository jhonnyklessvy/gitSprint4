import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPComponent } from './consultar-p.component';

describe('ConsultarPComponent', () => {
  let component: ConsultarPComponent;
  let fixture: ComponentFixture<ConsultarPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
