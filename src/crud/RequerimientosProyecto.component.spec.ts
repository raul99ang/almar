import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequerimientosProyectoComponent} from './RequerimientosProyecto.component';
 
describe('RequerimientosProyectoComponent', () => {
  let component: RequerimientosProyectoComponent;
  let fixture: ComponentFixture<RequerimientosProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequerimientosProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequerimientosProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});