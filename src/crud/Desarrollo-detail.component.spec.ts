import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesarrolloDetailComponent} from './Desarrollo-detail.component';
 
describe('DesarrolloDetailComponent', () => {
  let component: DesarrolloDetailComponent;
  let fixture: ComponentFixture<DesarrolloDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrolloDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesarrolloDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});