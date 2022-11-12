import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CilindroComponent } from './cilindro.component';

describe('CilindroComponent', () => {
  let component: CilindroComponent;
  let fixture: ComponentFixture<CilindroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CilindroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CilindroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
