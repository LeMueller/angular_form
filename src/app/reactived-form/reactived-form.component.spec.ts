import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivedFormComponent } from './reactived-form.component';

describe('ReactivedFormComponent', () => {
  let component: ReactivedFormComponent;
  let fixture: ComponentFixture<ReactivedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
