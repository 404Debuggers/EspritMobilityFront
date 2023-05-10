import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDormComponent } from './update-dorm.component';

describe('UpdateDormComponent', () => {
  let component: UpdateDormComponent;
  let fixture: ComponentFixture<UpdateDormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
