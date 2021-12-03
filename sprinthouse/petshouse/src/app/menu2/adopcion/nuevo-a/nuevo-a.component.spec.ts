import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAComponent } from './nuevo-a.component';

describe('NuevoAComponent', () => {
  let component: NuevoAComponent;
  let fixture: ComponentFixture<NuevoAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
