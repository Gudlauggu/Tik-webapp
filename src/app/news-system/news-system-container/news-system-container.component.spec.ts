import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSystemContainerComponent } from './news-system-container.component';

describe('NewsSystemContainerComponent', () => {
  let component: NewsSystemContainerComponent;
  let fixture: ComponentFixture<NewsSystemContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSystemContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSystemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
