import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSeletorPessoa } from './card-seletor-pessoa';

describe('CardSeletorPessoa', () => {
  let component: CardSeletorPessoa;
  let fixture: ComponentFixture<CardSeletorPessoa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSeletorPessoa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSeletorPessoa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
