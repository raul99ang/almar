import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspecificacionesTecnicasComponent} from './EspecificacionesTecnicas.component';
 
describe('EspecificacionesTecnicasComponent', () => {
  let component: EspecificacionesTecnicasComponent;
  let fixture: ComponentFixture<EspecificacionesTecnicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecificacionesTecnicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecificacionesTecnicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});