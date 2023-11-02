import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsuccessDialogComponent } from './unsuccess-dialog.component';

describe('UnsuccessDialogComponent', () => {
  let component: UnsuccessDialogComponent;
  let fixture: ComponentFixture<UnsuccessDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnsuccessDialogComponent]
    });
    fixture = TestBed.createComponent(UnsuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
