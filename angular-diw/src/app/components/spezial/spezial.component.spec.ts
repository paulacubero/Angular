import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpezialComponent } from './spezial.component';

describe('SpezialComponent', () => {
  let component: SpezialComponent;
  let fixture: ComponentFixture<SpezialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpezialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpezialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
