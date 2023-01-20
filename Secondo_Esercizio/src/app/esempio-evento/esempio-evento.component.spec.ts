import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsempioEventoComponent } from './esempio-evento.component';

describe('EsempioEventoComponent', () => {
  let component: EsempioEventoComponent;
  let fixture: ComponentFixture<EsempioEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsempioEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsempioEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
