import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroComponent } from './euro.component';

describe('EuroComponent', () => {
  let component: EuroComponent;
  let fixture: ComponentFixture<EuroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
