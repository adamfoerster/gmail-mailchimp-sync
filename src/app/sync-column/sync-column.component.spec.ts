import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncColumnComponent } from './sync-column.component';

describe('SyncColumnComponent', () => {
  let component: SyncColumnComponent;
  let fixture: ComponentFixture<SyncColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
