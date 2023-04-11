import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgnavComponent } from './imgnav.component';

describe('ImgnavComponent', () => {
  let component: ImgnavComponent;
  let fixture: ComponentFixture<ImgnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
