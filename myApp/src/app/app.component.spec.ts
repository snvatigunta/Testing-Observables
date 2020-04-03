import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myApp');
  });

  it('should assert the firstname', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let index = 0;
    const expectedFirstname = ['Ben', 'Jay'];
    app.firstName$.subscribe((user: string) => {
      expect(user).toEqual(expectedFirstname[index]);
      index++;
    });
  });

  it('should assert the lastname', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let index = 0;
    const expectedLastname = ['Lesh', 'Phelps'];
    app.lastName$.subscribe((user: string) => {
      expect(user).toEqual(expectedLastname[index]);
      index++;
    });
  });
});
