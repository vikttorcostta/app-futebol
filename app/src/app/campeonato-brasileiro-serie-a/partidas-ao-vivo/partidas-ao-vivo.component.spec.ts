import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasAoVivoComponent } from './partidas-ao-vivo.component';

describe('PartidasAoVivoComponent', () => {
  let component: PartidasAoVivoComponent;
  let fixture: ComponentFixture<PartidasAoVivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidasAoVivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidasAoVivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
