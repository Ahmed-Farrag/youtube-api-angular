import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistecComponent } from './statistec.component';

describe('StatistecComponent', () => {
  let component: StatistecComponent;
  let fixture: ComponentFixture<StatistecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
