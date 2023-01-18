import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaPersoneComponent } from './visualizza-persone.component';

describe('VisualizzaPersoneComponent', () => {
  let component: VisualizzaPersoneComponent;
  let fixture: ComponentFixture<VisualizzaPersoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaPersoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaPersoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
