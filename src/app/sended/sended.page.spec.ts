import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendedPage } from './sended.page';

describe('SendedPage', () => {
  let component: SendedPage;
  let fixture: ComponentFixture<SendedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
