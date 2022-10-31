import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovotipousuarioComponent } from './novotipousuario.component';

describe('NovotipousuarioComponent', () => {
  let component: NovotipousuarioComponent;
  let fixture: ComponentFixture<NovotipousuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovotipousuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovotipousuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
