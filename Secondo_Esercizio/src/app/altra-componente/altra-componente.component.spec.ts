import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltraComponenteComponent } from './altra-componente.component';

describe('AltraComponenteComponent', () => {
  let component: AltraComponenteComponent;
  let fixture: ComponentFixture<AltraComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltraComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltraComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
