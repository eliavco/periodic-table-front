import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAtomsComponent } from './select-atoms.component';

describe('SelectAtomsComponent', () => {
  let component: SelectAtomsComponent;
  let fixture: ComponentFixture<SelectAtomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAtomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAtomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
