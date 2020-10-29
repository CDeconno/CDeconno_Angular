import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselFooterComponent } from './carrusel-footer.component';

describe('CarruselFooterComponent', () => {
  let component: CarruselFooterComponent;
  let fixture: ComponentFixture<CarruselFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
