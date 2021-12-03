import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarVComponent } from './consultar-v.component';

describe('ConsultarVComponent', () => {
  let component: ConsultarVComponent;
  let fixture: ComponentFixture<ConsultarVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
