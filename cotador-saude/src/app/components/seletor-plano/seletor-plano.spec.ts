import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorPlano } from './seletor-plano';

describe('SeletorPlano', () => {
  let component: SeletorPlano;
  let fixture: ComponentFixture<SeletorPlano>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeletorPlano]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeletorPlano);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
