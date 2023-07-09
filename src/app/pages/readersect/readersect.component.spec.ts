import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadersectComponent } from './readersect.component';

describe('ReadersectComponent', () => {
  let component: ReadersectComponent;
  let fixture: ComponentFixture<ReadersectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadersectComponent]
    });
    fixture = TestBed.createComponent(ReadersectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
