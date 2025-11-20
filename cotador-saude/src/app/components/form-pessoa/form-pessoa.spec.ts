import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPessoa } from './form-pessoa';

describe('FormPessoa', () => {
  let component: FormPessoa;
  let fixture: ComponentFixture<FormPessoa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPessoa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPessoa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
