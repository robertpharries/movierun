import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilelistBasicComponent } from './filelist-basic.component';

describe('FilelistBasicComponent', () => {
  let component: FilelistBasicComponent;
  let fixture: ComponentFixture<FilelistBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilelistBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilelistBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
