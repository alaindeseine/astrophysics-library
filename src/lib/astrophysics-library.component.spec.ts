import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrophysicsLibraryComponent } from './astrophysics-library.component';

describe('AstrophysicsLibraryComponent', () => {
  let component: AstrophysicsLibraryComponent;
  let fixture: ComponentFixture<AstrophysicsLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstrophysicsLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrophysicsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
