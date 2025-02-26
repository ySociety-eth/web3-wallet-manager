import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppkitBtnComponent } from './appkit-btn.component';

describe('AppkitBtnComponent', () => {
  let component: AppkitBtnComponent;
  let fixture: ComponentFixture<AppkitBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppkitBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppkitBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
