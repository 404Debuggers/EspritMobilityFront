import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeOffreComponent } from './programme-offre.component';

describe('ProgrammeOffreComponent', () => {
  let component: ProgrammeOffreComponent;
  let fixture: ComponentFixture<ProgrammeOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammeOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
