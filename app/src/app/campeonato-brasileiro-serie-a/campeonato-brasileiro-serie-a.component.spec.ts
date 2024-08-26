import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonatoBrasileiroSerieAComponent } from './campeonato-brasileiro-serie-a.component';

describe('CampeonatoBrasileiroSerieAComponent', () => {
  let component: CampeonatoBrasileiroSerieAComponent;
  let fixture: ComponentFixture<CampeonatoBrasileiroSerieAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampeonatoBrasileiroSerieAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampeonatoBrasileiroSerieAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
