import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudIncomesComponent } from './crud-incomes.component';

describe('CrudIncomesComponent', () => {
  let component: CrudIncomesComponent;
  let fixture: ComponentFixture<CrudIncomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudIncomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudIncomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
