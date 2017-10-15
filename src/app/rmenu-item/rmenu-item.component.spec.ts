import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmenuItemComponent } from './rmenu-item.component';

describe('RmenuItemComponent', () => {
  let component: RmenuItemComponent;
  let fixture: ComponentFixture<RmenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
