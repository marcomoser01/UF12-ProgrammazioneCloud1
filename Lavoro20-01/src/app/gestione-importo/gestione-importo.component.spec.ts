import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneImportoComponent } from './gestione-importo.component';

describe('GestioneImportoComponent', () => {
  let component: GestioneImportoComponent;
  let fixture: ComponentFixture<GestioneImportoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneImportoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneImportoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
