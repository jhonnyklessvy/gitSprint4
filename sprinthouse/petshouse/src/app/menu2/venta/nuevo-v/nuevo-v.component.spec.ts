import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoVComponent } from './nuevo-v.component';

describe('NuevoVComponent', () => {
  let component: NuevoVComponent;
  let fixture: ComponentFixture<NuevoVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
