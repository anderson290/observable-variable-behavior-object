import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieveVariableComponent } from './recieve-variable.component';

describe('RecieveVariableComponent', () => {
  let component: RecieveVariableComponent;
  let fixture: ComponentFixture<RecieveVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecieveVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieveVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
