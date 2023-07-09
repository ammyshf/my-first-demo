import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderLayoutComponent } from './reader-layout.component';

describe('ReaderLayoutComponent', () => {
  let component: ReaderLayoutComponent;
  let fixture: ComponentFixture<ReaderLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReaderLayoutComponent]
    });
    fixture = TestBed.createComponent(ReaderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
