import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllarmeComponent } from './allarme.component';

describe('AllarmeComponent', () => {
  let component: AllarmeComponent;
  let fixture: ComponentFixture<AllarmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllarmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllarmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
