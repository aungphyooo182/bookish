import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDetailLoadingComponent } from './category-detail-loading.component';

describe('CategoryDetailLoadingComponent', () => {
  let component: CategoryDetailLoadingComponent;
  let fixture: ComponentFixture<CategoryDetailLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryDetailLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDetailLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
