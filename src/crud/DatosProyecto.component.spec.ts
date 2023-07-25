import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosProyectoComponent} from './DatosProyecto.component';
 
describe('DatosProyectoComponent', () => {
  let component: DatosProyectoComponent;
  let fixture: ComponentFixture<DatosProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});