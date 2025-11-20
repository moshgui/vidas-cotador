import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorOperadora } from './seletor-operadora';

describe('SeletorOperadora', () => {
  let component: SeletorOperadora;
  let fixture: ComponentFixture<SeletorOperadora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeletorOperadora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeletorOperadora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
