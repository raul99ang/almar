import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosProyectoDetailComponent} from './DatosProyecto-detail.component';
 
describe('DatosProyectoDetailComponent', () => {
  let component: DatosProyectoDetailComponent;
  let fixture: ComponentFixture<DatosProyectoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosProyectoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosProyectoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});