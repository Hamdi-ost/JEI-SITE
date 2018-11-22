import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteDetailsComponent } from './actualite-details.component';

describe('ActualiteDetailsComponent', () => {
  let component: ActualiteDetailsComponent;
  let fixture: ComponentFixture<ActualiteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActualiteDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
