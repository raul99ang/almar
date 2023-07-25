import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EquipoDetailComponent} from './Equipo-detail.component';
 
describe('EquipoDetailComponent', () => {
  let component: EquipoDetailComponent;
  let fixture: ComponentFixture<EquipoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});