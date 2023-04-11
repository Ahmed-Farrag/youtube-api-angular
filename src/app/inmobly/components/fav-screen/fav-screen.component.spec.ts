import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavScreenComponent } from './fav-screen.component';

describe('FavScreenComponent', () => {
  let component: FavScreenComponent;
  let fixture: ComponentFixture<FavScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
