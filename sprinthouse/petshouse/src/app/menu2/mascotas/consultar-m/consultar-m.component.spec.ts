import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMComponent } from './consultar-m.component';

describe('ConsultarMComponent', () => {
  let component: ConsultarMComponent;
  let fixture: ComponentFixture<ConsultarMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
