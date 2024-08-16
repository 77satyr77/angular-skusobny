import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodojednotlivoComponent } from './todojednotlivo.component';

describe('TodojednotlivoComponent', () => {
  let component: TodojednotlivoComponent;
  let fixture: ComponentFixture<TodojednotlivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodojednotlivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodojednotlivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
