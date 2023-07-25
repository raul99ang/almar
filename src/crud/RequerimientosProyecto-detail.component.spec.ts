import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequerimientosProyectoDetailComponent} from './RequerimientosProyecto-detail.component';
 
describe('RequerimientosProyectoDetailComponent', () => {
  let component: RequerimientosProyectoDetailComponent;
  let fixture: ComponentFixture<RequerimientosProyectoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequerimientosProyectoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequerimientosProyectoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});