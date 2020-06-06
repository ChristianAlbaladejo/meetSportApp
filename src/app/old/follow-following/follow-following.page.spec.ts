import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FollowFollowingPage } from './follow-following.page';

describe('FollowFollowingPage', () => {
  let component: FollowFollowingPage;
  let fixture: ComponentFixture<FollowFollowingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowFollowingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FollowFollowingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
