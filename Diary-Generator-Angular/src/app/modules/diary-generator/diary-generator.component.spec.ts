import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryGeneratorComponent } from './diary-generator.component';

describe('DiaryGeneratorComponent', () => {
  let component: DiaryGeneratorComponent;
  let fixture: ComponentFixture<DiaryGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaryGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiaryGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
