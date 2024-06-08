import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListaPacientesComponent } from './edit-lista-pacientes.component';

describe('EditListaPacientesComponent', () => {
  let component: EditListaPacientesComponent;
  let fixture: ComponentFixture<EditListaPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditListaPacientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditListaPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
