import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarUComponent } from './consultar-u.component';

describe('ConsultarUComponent', () => {
  let component: ConsultarUComponent;
  let fixture: ComponentFixture<ConsultarUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
