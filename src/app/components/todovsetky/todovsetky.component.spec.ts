import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodovsetkyComponent } from './todovsetky.component';

describe('TodovsetkyComponent', () => {
  let component: TodovsetkyComponent;
  let fixture: ComponentFixture<TodovsetkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodovsetkyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodovsetkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
