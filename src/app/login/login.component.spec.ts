import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to clients page on successful login', () => {
    spyOn(window, 'alert');
    spyOn(router, 'navigate');

    component.username = 'admin';
    component.password = 'admin';
    component.login();

    expect(window.alert).not.toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['clients']);
  });

  it('should show alert on invalid login credentials', () => {
    spyOn(window, 'alert');
    spyOn(router, 'navigate');

    component.username = 'invalid';
    component.password = 'invalid';
    component.login();

    expect(window.alert).toHaveBeenCalledWith('Invalid credentials');
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
