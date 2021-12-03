import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoUComponent } from './nuevo-u.component';

describe('NuevoUComponent', () => {
  let component: NuevoUComponent;
  let fixture: ComponentFixture<NuevoUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
