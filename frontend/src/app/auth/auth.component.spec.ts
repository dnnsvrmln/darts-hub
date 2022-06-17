import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

import { AuthComponent } from './auth.component';
import {AuthService} from "./auth.service";
import {FormsModule} from "@angular/forms";

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should sign up to be truthy', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.signUp('testName', 'test@test.nl', 'mysecretpassword', 'mysecretpassword')).toBeTruthy();
  });

  it('should sign in', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.signIn('test@test.nl', 'mysecretpassword', true)).toBeTruthy();
    expect(service.signIn('test@test.nl', 'mysecretpassword', false)).toBeTruthy();
  });
});
