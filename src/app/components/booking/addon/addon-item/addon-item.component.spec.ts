import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonItemComponent } from './addon-item.component';

describe('AddonItemComponent', () => {
  let component: AddonItemComponent;
  let fixture: ComponentFixture<AddonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
