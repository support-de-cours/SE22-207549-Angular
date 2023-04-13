import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTypeExempleComponent } from './data-type-exemple.component';

describe('DataTypeExempleComponent', () => {
  let component: DataTypeExempleComponent;
  let fixture: ComponentFixture<DataTypeExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTypeExempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTypeExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
