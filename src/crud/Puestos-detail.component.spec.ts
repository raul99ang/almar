import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PuestosDetailComponent} from './Puestos-detail.component';
 
describe('PuestosDetailComponent', () => {
  let component: PuestosDetailComponent;
  let fixture: ComponentFixture<PuestosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuestosDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuestosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});