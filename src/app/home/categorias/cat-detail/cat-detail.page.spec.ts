import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatDetailPage } from './cat-detail.page';

describe('CatDetailPage', () => {
  let component: CatDetailPage;
  let fixture: ComponentFixture<CatDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
