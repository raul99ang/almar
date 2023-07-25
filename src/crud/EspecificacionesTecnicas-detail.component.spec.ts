import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspecificacionesTecnicasDetailComponent} from './EspecificacionesTecnicas-detail.component';
 
describe('EspecificacionesTecnicasDetailComponent', () => {
  let component: EspecificacionesTecnicasDetailComponent;
  let fixture: ComponentFixture<EspecificacionesTecnicasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecificacionesTecnicasDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecificacionesTecnicasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});