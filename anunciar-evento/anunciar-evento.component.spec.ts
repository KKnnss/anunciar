import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciarEventoComponent } from './anunciar-evento.component';

describe('AnunciarEventoComponent', () => {
  let component: AnunciarEventoComponent;
  let fixture: ComponentFixture<AnunciarEventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnunciarEventoComponent]
    });
    fixture = TestBed.createComponent(AnunciarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
