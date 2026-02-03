import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemNotifComponent } from './system-notif.component';

describe('SystemNotifComponent', () => {
  let component: SystemNotifComponent;
  let fixture: ComponentFixture<SystemNotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemNotifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
