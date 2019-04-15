import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomExampleComponent } from './mushroom-example.component';

describe('MushroomExampleComponent', () => {
  let component: MushroomExampleComponent;
  let fixture: ComponentFixture<MushroomExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MushroomExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MushroomExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
