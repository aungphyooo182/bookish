import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLoadingComponent } from './category-loading.component';

describe('CategoryLoadingComponent', () => {
  let component: CategoryLoadingComponent;
  let fixture: ComponentFixture<CategoryLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
